import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { postId } = useParams();

  // Blog post data
  const blogPost = {
    id: 1,
    title: "Why Corporate Wellness Is More Than Just a Perk in 2025",
    date: "January 16, 2025",
    readTime: "8 min read",
    image: "/lovable-uploads/9ffaea78-830d-4871-a60f-e24422f4ebd7.png",
    content: {
      intro: "In the growing corporate ecosystem of Nepal where working hours are long and hustle culture is the standard, wellbeing of the employees is more than just an HR check-box, it's becoming a business essential.",
      sections: [
        {
          content: "Not so long ago \"Wellness\" in Nepali offices were just limited to annual outings or health camps. But as of now, due the rise of health and wellness awareness, companies in the cities of Nepal are waking up to a critical truth: The backbone of sustainable growth in business are healthy and motivated employees. Corporate Wellness is no longer a perk today, it is about long term success and growth. It is about building strong teams and ensuring resilience in an increasing competitive environment."
        },
        {
          heading: "Building Resilient Workplaces Through Employee Wellbeing",
          content: "The work force in Nepal is youth driven, energetic and digitally active, but also very vulnerable to burnout, stress and disengagement. Between physically draining commutes, long desk bound hours, demanding deadlines, and limited access to wellness resources, the average employee is operating under more pressure than ever before. Forward thinking companies are beginning to understand that supporting their employees isn't just a perk but a necessity for building resilient and high performing workplaces. That is where we come in."
        },
        {
          content: "As Nepal's first fitness platform that is solely focused on corporate wellness, Meltdown helps companies in Nepal prioritise wellness that fit today's flexible, hybrid work culture. Whether it's giving employees access to a wide network of wellness centers, fitness challenges across teams, or integrating mental wellness initiatives through our app, Meltdown makes wellness easy, scalable, and engaging for every type of workplace."
        },
        {
          content: "And the results speak for themselves:",
          list: [
            "Improved Employee Retention: In today's competitive environment in bussiness, healthy and supported employees are more loyal. Corporate wellness programs can reduce burnout and turnover, especially in high-stress environments.",
            "Higher Productivity: Regular movement leads to better sleep, improved focus, and reduced stress, all of which boost overall productivity.",
            "Enhanced Employer Brand: Companies with strong wellness cultures often attract top talent and build reputations as great places to work.",
            "Stronger Morale & Culture: Group wellness initiatives and shared goals foster a sense of bonding and connection."
          ]
        },
        {
          heading: "Our role in Modern Corporate Wellness",
          content: "Here at Meltdown we believe that corporate wellness should be accessible, inclusive and enjoyable. That's why we have created solutions that don't only limit to gym and yoga mats. Here's how we help businesses in Nepal take care of their teams."
        },
        {
          subheading: "1. Access to several wellness centers",
          content: "Through our platform, companies can give employees flexible access to a growing network of 70+ several wellness centers making it easier for teams to stay active and healthy, wherever they're based."
        },
        {
          subheading: "2. Tailored Corporate Packages",
          content: "We work closely with HR teams to design wellness plans that align with company goals, culture, and budget making sure that your wellness efforts are both relevant and sustainable."
        },
        {
          subheading: "3. Diverse Wellness Activities",
          content: "We understand that wellness isn't one-size-fits-all. That's why, in addition to gym access, we also offer options like yoga sessions, Zumba classes, dance workouts, mobility training, and more, so employees can choose what works for their body and lifestyle."
        },
        {
          subheading: "4. Purpose-Driven Wellness",
          content: "We are actively hosting events that tie wellness to impact in the community, linking team goals with social contribution such as tree planting. This turns movement into shared motivation and meaning."
        },
        {
          heading: "The Future of Work is Wellbeing-First",
          content: "Today, corporate wellness in Nepal is no longer about one-off health camps or basic gym subsidies. It's about creating workplaces where people feel supported, energized, and connected whether they're inside or outside the office."
        },
        {
          content: "As employee expectations shift and competition for talent rises, companies that invest in the well-being of their employees will stand out, not just as employers of choice, but as resilient, future-ready organizations."
        },
        {
          content: "With accessible tools like multi-location wellness center access, inclusive fitness challenges, and purpose-driven wellness campaigns, Meltdown is helping reshape what workplace wellbeing can look like: practical, people-first, and rooted in local context. Investing in employee wellbeing isn't a perk, it's your competitive edge."
        },
        {
          content: "That's where a comprehensive employee wellness program comes in. At Meltdown, we help turn fitness into a strategic asset. Our programs are designed to engage every employee regardless of their fitness level, schedule, or work location building a more inclusive and resilient workplace culture."
        },
        {
          content: "When done right, wellness isn't just a feel-good initiative, it's a business advantage. Companies that prioritize wellbeing see stronger teams, better retention, and healthier bottom lines."
        },
        {
          content: "Looking to energize your workplace with purpose-driven wellness? Reach out to Meltdown and discover how our initiative can transform your team's wellbeing, one step at a time. Get in touch at meltdownnepal.com"
        }
      ],
      references: [
        "MyRepublica. (2022). Correlation Among Operational Risks, Employee Stress Management, and Wellbeing. Retrieved from https://myrepublica.nagariknetwork.com/news/correlation-among-operational-risks-employee-stress-management-and-well-being",
        "Wellhub. (2024). Return on Wellbeing Report 2024. Retrieved from https://wellhub.com",
        "Cigna Newsroom. (2023). Employee Health & Wellbeing Yield 47% Business ROI. Retrieved from https://newsroom.cigna.com",
        "Harvard Business Review. (2010). What's the Hard Return on Employee Wellness Programs? Retrieved from https://hbr.org/2010/12/whats-the-hard-return-on-employee-wellness-programs",
        "Forte. (2022). The ROI of Wellness Programs: A Guide for Decision Makers. Retrieved from https://www.getforte.com"
      ]
    }
  };

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={blogPost.title}
        description={blogPost.content.intro}
        keywords="Corporate wellness Nepal, employee wellbeing, workplace wellness programs, Meltdown Nepal"
        canonical={`https://meltdownnepal.com/blog/${postId}`}
        ogImage={blogPost.image}
        ogType="article"
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-12">
          <div className="container-custom mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 border border-border/20">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Meta */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {blogPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold font-header mb-8 leading-tight">
                {blogPost.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container-custom mx-auto py-16">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                {blogPost.content.intro}
              </p>

              {/* Content Sections */}
              <div className="space-y-8">
                {blogPost.content.sections.map((section, index) => (
                  <div key={index}>
                    {section.heading && (
                      <h2 className="text-2xl font-bold font-header mb-4 text-foreground">
                        {section.heading}
                      </h2>
                    )}
                    {section.subheading && (
                      <h3 className="text-xl font-semibold font-header mb-3 text-foreground">
                        {section.subheading}
                      </h3>
                    )}
                    {section.content && (
                      <p className="text-foreground/90 leading-relaxed mb-4">
                        {section.content}
                      </p>
                    )}
                    {section.list && (
                      <ul className="space-y-3 mb-6">
                        {section.list.map((item, listIndex) => (
                          <li key={listIndex} className="text-foreground/90 leading-relaxed">
                            <strong className="font-semibold">
                              {item.split(':')[0]}:
                            </strong>
                            {item.split(':').slice(1).join(':')}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* References */}
              <div className="mt-16 pt-8 border-t border-border/20">
                <h3 className="text-xl font-semibold font-header mb-4">References</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  {blogPost.content.references.map((reference, index) => (
                    <li key={index} className="leading-relaxed">
                      {index + 1}. {reference}
                    </li>
                  ))}
                </ol>
              </div>
            </article>

            {/* CTA Section */}
            <div className="mt-16 bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/20 text-center">
              <h3 className="text-2xl font-semibold font-header mb-4">Ready to Transform Your Workplace?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discover how Meltdown can help your company build a healthier, more engaged workforce through our comprehensive wellness programs.
              </p>
              <Button asChild size="lg">
                <Link to="/schedule-demo">
                  Get Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;