
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AnalyticsData {
  totalPageViews: number;
  uniqueVisitors: number;
  topPages: Array<{ page_path: string; views: number }>;
  deviceTypes: Array<{ device_type: string; count: number }>;
  countries: Array<{ country: string; count: number }>;
  recentEvents: Array<{
    event_type: string;
    event_name: string;
    timestamp: string;
    page_path: string;
  }>;
}

export const Analytics: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        // Get total page views
        const { count: totalPageViews } = await supabase
          .from('page_views')
          .select('*', { count: 'exact', head: true });

        // Get unique visitors
        const { count: uniqueVisitors } = await supabase
          .from('visitor_sessions')
          .select('*', { count: 'exact', head: true });

        // Get top pages
        const { data: topPagesData } = await supabase
          .from('page_views')
          .select('page_path')
          .order('timestamp', { ascending: false })
          .limit(1000);

        const pageViewCounts = topPagesData?.reduce((acc, view) => {
          acc[view.page_path] = (acc[view.page_path] || 0) + 1;
          return acc;
        }, {} as Record<string, number>) || {};

        const topPages = Object.entries(pageViewCounts)
          .map(([page_path, views]) => ({ page_path, views }))
          .sort((a, b) => b.views - a.views)
          .slice(0, 5);

        // Get device types
        const { data: deviceData } = await supabase
          .from('visitor_sessions')
          .select('device_type')
          .not('device_type', 'is', null);

        const deviceCounts = deviceData?.reduce((acc, session) => {
          if (session.device_type) {
            acc[session.device_type] = (acc[session.device_type] || 0) + 1;
          }
          return acc;
        }, {} as Record<string, number>) || {};

        const deviceTypes = Object.entries(deviceCounts)
          .map(([device_type, count]) => ({ device_type, count }));

        // Get countries
        const { data: countryData } = await supabase
          .from('visitor_sessions')
          .select('country')
          .not('country', 'is', null)
          .limit(100);

        const countryCounts = countryData?.reduce((acc, session) => {
          if (session.country) {
            acc[session.country] = (acc[session.country] || 0) + 1;
          }
          return acc;
        }, {} as Record<string, number>) || {};

        const countries = Object.entries(countryCounts)
          .map(([country, count]) => ({ country, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        // Get recent events
        const { data: recentEvents } = await supabase
          .from('visitor_events')
          .select('event_type, event_name, timestamp, page_path')
          .order('timestamp', { ascending: false })
          .limit(10);

        setData({
          totalPageViews: totalPageViews || 0,
          uniqueVisitors: uniqueVisitors || 0,
          topPages,
          deviceTypes,
          countries,
          recentEvents: recentEvents || []
        });
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return <div className="p-6">Loading analytics...</div>;
  }

  if (!data) {
    return <div className="p-6">Error loading analytics data.</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Website Analytics</h1>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalPageViews}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.uniqueVisitors}</div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {data.topPages.map((page, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{page.page_path}</span>
                <Badge variant="secondary">{page.views} views</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Device Types and Countries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Device Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.deviceTypes.map((device, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="capitalize">{device.device_type}</span>
                  <Badge variant="outline">{device.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.countries.map((country, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{country.country}</span>
                  <Badge variant="outline">{country.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Events */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.recentEvents.map((event, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-medium">{event.event_name}</span>
                    <Badge variant="secondary" className="ml-2">{event.event_type}</Badge>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(event.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-gray-600">{event.page_path}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
