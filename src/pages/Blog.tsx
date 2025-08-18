
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Corporate Wellness Is More Than Just a Perk in 2025",
      excerpt: "In the growing corporate ecosystem of Nepal where working hours are long and hustle culture is the standard, wellbeing of the employees is more than just an HR check-box, it's becoming a business essential.",
      date: "January 16, 2025",
      readTime: "8 min read",
      image: "/lovable-uploads/9ffaea78-830d-4871-a60f-e24422f4ebd7.png"
    },
    {
      id: 2,
      title: "Top 10 Gyms in Kathmandu Valley",
      excerpt: "Looking for the best gyms in Kathmandu? Discover the top 10 gyms in Kathmandu Valley that offer quality equipment, expert trainers, and the perfect environment for your fitness journey.",
      date: "January 18, 2025",
      readTime: "12 min read",
      image: "/lovable-uploads/WellnessSessions.webp"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Meltdown Blog - Corporate Wellness Insights",
    "description": "Expert insights on corporate wellness in Nepal, gym reviews, and employee wellbeing strategies",
    "url": "https://meltdownnepal.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Meltdown Wellbeing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://meltdownnepal.com/lovable-uploads/a44d1192-3b50-4319-8b71-b312a47bf095.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": new Date(post.date).toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Meltdown Wellbeing"
      },
      "image": `https://meltdownnepal.com${post.image}`,
      "url": `https://meltdownnepal.com/blog/${post.id}`
    }))
  };

  return (
    <>
      <SEO 
        title="Meltdown Blog – Corporate Wellness & Fitness Insights in Nepal"
        description="Discover corporate wellness insights, gym reviews, and fitness trends in Nepal. Expert advice on employee wellbeing, workplace wellness programs, and the best gyms in Kathmandu Valley."
        keywords="Corporate wellness Nepal, employee wellbeing, workplace wellness, best gyms Kathmandu, fitness centers Nepal, gym reviews Kathmandu Valley, corporate health programs"
        canonical="https://meltdownnepal.com/blog"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
          <div className="container-custom mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-header mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Meltdown Blog
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-4">
              Corporate Wellness & Fitness Insights
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover expert insights on corporate wellness in Nepal, comprehensive gym reviews, and fitness trends. 
              Learn how to build healthier workplaces, find the best gyms in Kathmandu Valley, and create sustainable wellness programs.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container-custom mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 h-full">
                  <CardHeader className="space-y-4">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden border border-border/20">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardTitle className="text-xl font-header leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1 group">
                      Read More
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/20">
            <h3 className="text-2xl font-semibold font-header mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              More insightful articles on corporate wellness and fitness insights in Nepal coming soon! 
              Subscribe to our newsletter to be the first to know.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
