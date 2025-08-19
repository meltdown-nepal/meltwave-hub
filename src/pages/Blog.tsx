
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';

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
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-muted/10 py-20 lg:py-28">
          <div className="container-custom mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-header mb-6 text-foreground">
              Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert insights on corporate wellness, fitness trends, and building healthier workplaces in Nepal.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container-custom mx-auto py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                <Card className="h-full overflow-hidden border border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl font-header leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl lg:text-3xl font-header font-bold mb-4 text-foreground">
                Ready to Transform Your Workplace?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join leading companies in Nepal who are creating healthier, more productive workplaces with our comprehensive wellness solutions.
              </p>
            </div>
            
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3 rounded-lg">
              <Link to="/schedule-demo" className="inline-flex items-center gap-2">
                Get Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
