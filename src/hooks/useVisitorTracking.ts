
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface VisitorData {
  session_id: string;
  page_path: string;
  page_title: string;
  referrer: string;
  user_agent: string;
  screen_resolution: string;
  viewport_size: string;
  device_type: string;
  browser: string;
  os: string;
}

export const useVisitorTracking = () => {
  const location = useLocation();
  const [sessionId] = useState(() => {
    // Get or create session ID
    let id = sessionStorage.getItem('visitor_session_id');
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem('visitor_session_id', id);
    }
    return id;
  });
  
  const pageStartTime = useRef<number>(Date.now());
  const lastTrackedPath = useRef<string>('');

  const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;
    
    // Detect device type
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
    const device_type = isMobile ? (isTablet ? 'tablet' : 'mobile') : 'desktop';
    
    // Detect browser
    let browser = 'Unknown';
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';
    
    // Detect OS
    let os = 'Unknown';
    if (userAgent.includes('Windows')) os = 'Windows';
    else if (userAgent.includes('Mac')) os = 'macOS';
    else if (userAgent.includes('Linux')) os = 'Linux';
    else if (userAgent.includes('Android')) os = 'Android';
    else if (userAgent.includes('iOS')) os = 'iOS';
    
    return { device_type, browser, os };
  };

  const getUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content')
    };
  };

  const trackPageView = async () => {
    try {
      const { device_type, browser, os } = getDeviceInfo();
      const utmParams = getUTMParams();
      
      const visitorData: VisitorData = {
        session_id: sessionId,
        page_path: location.pathname + location.search,
        page_title: document.title,
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        device_type,
        browser,
        os
      };

      await fetch('https://isqyxkfodhgxzcyplbkg.supabase.co/functions/v1/track-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'page_view',
          data: {
            ...visitorData,
            ...utmParams
          }
        })
      });

      console.log('Page view tracked:', visitorData.page_path);
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };

  const trackPageDuration = async (pagePath: string) => {
    if (pageStartTime.current) {
      const duration = Math.round((Date.now() - pageStartTime.current) / 1000);
      
      try {
        await fetch('https://isqyxkfodhgxzcyplbkg.supabase.co/functions/v1/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'page_duration',
            data: {
              session_id: sessionId,
              page_path: pagePath,
              duration_seconds: duration
            }
          })
        });

        console.log(`Page duration tracked: ${duration}s for ${pagePath}`);
      } catch (error) {
        console.error('Error tracking page duration:', error);
      }
    }
  };

  const trackEvent = async (eventType: string, eventName: string, eventData?: any) => {
    try {
      await fetch('https://isqyxkfodhgxzcyplbkg.supabase.co/functions/v1/track-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'event',
          data: {
            session_id: sessionId,
            event_type: eventType,
            event_name: eventName,
            event_data: eventData,
            page_path: location.pathname + location.search
          }
        })
      });

      console.log('Event tracked:', eventType, eventName);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    
    // Track page duration for previous page
    if (lastTrackedPath.current && lastTrackedPath.current !== currentPath) {
      trackPageDuration(lastTrackedPath.current);
    }
    
    // Track new page view
    trackPageView();
    
    // Update tracking variables
    pageStartTime.current = Date.now();
    lastTrackedPath.current = currentPath;

    // Track page duration when leaving the page
    const handleBeforeUnload = () => {
      trackPageDuration(currentPath);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname, location.search]);

  return {
    trackEvent,
    sessionId
  };
};
