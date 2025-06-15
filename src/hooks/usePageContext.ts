
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageContent {
  title: string;
  headings: string[];
  paragraphs: string[];
  links: string[];
  images: string[];
  pageType: string;
  route: string;
}

export const usePageContext = () => {
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const location = useLocation();

  const extractPageContent = (): PageContent => {
    // Get page title
    const title = document.title || '';
    
    // Extract headings
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .map(el => el.textContent?.trim() || '')
      .filter(text => text.length > 0);

    // Extract paragraphs and text content
    const paragraphs = Array.from(document.querySelectorAll('p, .text-lg, .description'))
      .map(el => el.textContent?.trim() || '')
      .filter(text => text.length > 20) // Only meaningful paragraphs
      .slice(0, 10); // Limit to avoid too much data

    // Extract links
    const links = Array.from(document.querySelectorAll('a'))
      .map(el => el.textContent?.trim() || '')
      .filter(text => text.length > 0 && !text.includes('http'))
      .slice(0, 15);

    // Extract image alt texts
    const images = Array.from(document.querySelectorAll('img'))
      .map(el => el.getAttribute('alt') || '')
      .filter(alt => alt.length > 0);

    // Determine page type based on route
    const route = location.pathname;
    let pageType = 'home';
    
    if (route.includes('/academy')) pageType = 'academy';
    else if (route.includes('/corporate-wellness')) pageType = 'corporate-wellness';
    else if (route.includes('/companies')) pageType = 'companies';
    else if (route.includes('/employees')) pageType = 'employees';
    else if (route.includes('/events')) pageType = 'events';
    else if (route.includes('/contact')) pageType = 'contact';
    else if (route.includes('/providers')) pageType = 'providers';
    else if (route.includes('/pricing')) pageType = 'pricing';
    else if (route.includes('/faq')) pageType = 'faq';

    return {
      title,
      headings,
      paragraphs,
      links,
      images,
      pageType,
      route
    };
  };

  useEffect(() => {
    // Small delay to ensure page content is loaded
    const timer = setTimeout(() => {
      const content = extractPageContent();
      setPageContent(content);
      console.log('📄 Page context extracted:', content);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return { pageContent };
};
