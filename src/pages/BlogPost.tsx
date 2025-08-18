
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { postId } = useParams();

  // Blog posts data
  const blogPosts = {
    "1": {
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
    },
    "2": {
      id: 2,
      title: "Top 10 Gyms in Kathmandu Valley",
      date: "January 18, 2025",
      readTime: "12 min read",
      image: "/lovable-uploads/WellnessSessions.webp",
      content: {
        intro: "Looking for the best gyms in Kathmandu? Well, you're not alone. With Kathmandu's fitness culture quickly evolving, demands for gyms that serve quality and needs have never been higher. With so many options available it can be confusing to choose the best one for you.",
        sections: [
          {
            content: "At Meltdown, we are proud to be partnered with some of the most trusted and well equipped gyms around Kathmandu valley. These gyms not only provide you the space to grow strong but also the best trainers, equipment and environment in the valley."
          },
          {
            content: "Whether you're chasing a six pack, building strength or just showing up for yourself, the right gym can make all the difference. Here are the Top Ten Gyms in Kathmandu valley, where you can train smart, feel stronger and stay consistent."
          },
          {
            heading: "1. The Pump",
            content: "Locations: Jhamsikhel and Chahabail",
            subheading: "Amenities: Lockers, Showers, Parking",
            list: [
              "Opening Hours: 5:30 AM - 8:30 PM (Monday-Saturday), 7:00 AM - 12:00 PM (Sunday)"
            ]
          },
          {
            content: "The pump, with locations in Chahabail and Jhamsikhel is arguably one of the best well rounded fitness centres in Kathmandu valley. What sets pump apart from the rest is its excellent balance between traditional strength training and functional fitness. The gym floor is equipped with high-end machines for both resistance training and cardio along with a well maintained free weight section and dedicated section for stretching and body weight work. The members are most benefited by the thoughtful design that avoids overcrowding even at peak hour, creating a calm and focused training environment. The Pump is appealing to working professionals, disciplined listers and lifestyle focused people alike. It avoids the chaotic energy of the overly commercialised gyms and instead provides a well structured and motivating space where you can genuinely grow and improve. Whether you're looking for strength, endurance and mobility or just a reliable gym, The pump offers in all fronts- making it one of the best gyms in the valley."
          },
          {
            heading: "2. Total Physical Fitness Center (TPFC)",
            content: "Location: New Baneshowr",
            subheading: "Amenities: Lockers, Shower, Sauna",
            list: [
              "Opening Hours: 5:30 AM - 9:00 PM (Sunday-Friday), 5:30 AM - 7:00 PM (Saturday)"
            ]
          },
          {
            content: "Known for its large training floor, versatile workout zones, and professional setup, TPFC is one of the most well equipped and spacious fitness centers in the valley. TPFC blends scale with quality, making it a top tier choice for both beginners and seasoned gym-goers. The gym offers a full spectrum of training zones from modern strength machines and free weights to a well equipped cardio area and open functional spaces. TPFC stands out because of its range: from modern strength and cardio classes to high energy group classes like kickboxing and boxing, the gym caters to diverse training classes. In terms of comfort TPFC does not compromise. Their facilities include sauna and steam rooms along with hot and cold showers. One of its most underrated strengths is ample on-site parking, making it one of the few large gyms in the valley where accessibility isn't a hassle. Any time, any style TPFC is built to support a wide range of fitness goals, if you value quality, variety and space this is the gym for you."
          },
          {
            heading: "3. Hilton Fitness",
            content: "Location: Dibeshowr planning, Bhaktapur",
            subheading: "Amenities: Lockers, Shower, Sauna and Steam, Jacuzzi",
            list: [
              "Opening Hours: 5:00 AM - 9:00 PM (All week)"
            ]
          },
          {
            content: "Hilton Fitness is a polished, full service gym offering a modern and wellness forward environment. Located in the heart of Bhaktapur, it brings a premium, wellness focused training experience to the eastern side of the valley. The space is organized and is equipped with modern strength training machines, free weights, and a dedicated cardio section, making it suitable for both beginners and serious lifters. Hilton's emphasis on balance, not just training styles but in lifestyle is what sets it apart from the others. Beyond the gym floor, members get access to a full suite of recovery-focused amenities, including a sauna, steam room and jacuzzi. These wellness add-ons make it easy to wind down post-workout and turn a simple gym visit into a full self care session. Hilton also offers a solid rotation of group classes, including zumba, aerobics and body-weight focused sessions, perfect for people trying to stay consistent through the movement community Hilton fitness is an excellent fit for wellness enthusiasts or anyone in Bhaktapur looking to train in a calm, elevated environment, where both physical progress and recovery are part of the experience."
          },
          {
            heading: "4. Rush Fitness",
            content: "Location: Bansbari, Kathmandu",
            subheading: "Amenities: Locker, Shower, Parking",
            list: [
              "Opening Hours: 6:00 AM - 8:00 PM (Sunday-Friday), 6:00 AM - 12:00 PM (Saturday)"
            ]
          },
          {
            content: "Rush Fitness Nepal, located in Bansbari, is a dynamic and modern fitness gym that caters to versatility and functionality in every corner. The gym stands out for its commitment to functional training and performance driven programming. From high quality resistance machines to open areas for mobility, strength, and cardio, the space is thoughtfully laid for efficient and versatile workouts. The atmosphere is energetic yet welcoming, ideal for lifters, movement enthusiasts, and consistency driven members. Their balance between functional training and traditional gym is what differentiates Rush from the rest, the members can easily switch between strength, endurance and mobility sessions. Open facility layout and organized equipment placement make it easy to navigate without feeling crowded, even during peak hours. Rush has a visually fresh environment with ample space and greenery around the gym, not to mention convenient on site parking, which is quite rare in dense areas of the city. For a space that fuels your grind and keeps you inspired, Rush Fitness Nepal blends smart training options with a sleek, motivating environment, where every sweat takes you closer to your best self."
          },
          {
            heading: "5. ROC Fitness Clubs",
            content: "Locations: Tinkune / Jadibuti",
            subheading: "Amenities: Shower, Locker, Parking",
            list: [
              "Opening Hours: 7:00 AM - 9:00 PM (Sunday-Friday, Closed on Saturday)"
            ]
          },
          {
            content: "ROC Fitness Club, with its flagship branch in Tinkune and a newer space in Jadibuti (V2.0), has steadily grown into one of the valley's most trusted names in strength and conditioning. It's not just another gym; ROC is built around a performance-driven culture where serious training meets solid structure. Their team of certified trainers adds value with well guided programs that support your growth. At Roc, the environment is thoughtfully designed to support focused and effective training. They have a full range of modern equipment, from strength machines and free weights to a dedicated cardio section. ROC is a gym with consistent energy, a supportive environment and a crowd that's here to work. From group classes to focused training zones in both branches, they've created a gym culture that's motivating but never overwhelming. From first milestones to major breakthroughs, ROC Fitness Club offers the structure, support, and energy needed to move with purpose and stay consistent."
          },
          {
            heading: "6. Athlete Land",
            content: "Location: Balkumari, Lalitpur",
            subheading: "Amenities: Lockers, Shower and Sauna",
            list: [
              "Opening hours: 24 hours (Sunday-Friday), Saturday (6 AM - 12 PM)"
            ]
          },
          {
            content: "If your training is non negotiable, Athlete Land Training Club in Balkumari, Lalitpur is ready anytime, literally. With round-the-clock access, this performance-first space blends weightlifting, mobility, and combat-style fitness under one roof. They have a spacious gym floor that is well equipped with high quality resistance machines, a solid free weights section and a large area dedicated to mobility, boxing and functional drills. Athlete Land also offers specialized group classes, from strength circuits to boxing and body weight focused programs, making it easy to stay consistent with carried movement styles. What makes Athlete Land shine is its grounded, community-centered energy and the freedom to train anytime. As a 24 hours facility, it removes the barrier of time, letting members stick to their own rhythm and routine. This is the place where you show up, put in work and walk out stronger every week. Athlete Land stands out for those who want to train and train whenever it works for them."
          },
          {
            heading: "7. Regal Fitness Club",
            content: "Location: Kamalpokhari/teku",
            subheading: "Amenities: Lockers, shower"
          },
          {
            content: "With locations in City Centre, Kamalpokhari and Teku, Regal Fitness Club brings a polished, performance meets luxury gym experience to the busy Kathmandu Valley. It blends effective training with comfort and recovery, making it a standout choice for those who value result and ambiance. The gym is equipped with premium strength training machines, a full range of cardio equipment, free weights and functional zones that accommodate everything from heavy lifts to mobility work. Regal maintains a clean, spacious environment with structured membership tiers catering to students, professionals and fitness enthusiasts. Despite its upscale feel, the vibe remains grounded. Trainers are approachable, the energy is focused, and the layout avoids the chaos often found in trend driven gyms. With a balance of well maintained gym equipment, thoughtful design, and premium features, Regal Fitness Club is perfect for those who want a solid gym floor with a bit of wellness indulgence, all under one roof."
          },
          {
            heading: "8. Tapout Fitness",
            content: "Location: Baluwatar, Kathmandu",
            subheading: "Amenities: Shower, Locker, Parking",
            list: [
              "Opening Hours: 6:00 AM - 9:00 PM"
            ]
          },
          {
            content: "Located in Baluwatar, Kathmandu, Tapout Fitness is a high energy fitness destination that blends combat sport with functional training for a truly dynamic experience. The facility is equipped with dedicated spaces for MMA, Kickboxing, and strength training, alongside cardio and conditioning areas. Expert trainers guide members through technical skill work, high intensity drills, and strength sessions, making it an ideal space for both fighters in training and fitness enthusiasts seeking variety. Tapout's layout allows for seamless transitions between combat zones, free weight areas and cardio stations. The environment is electric yet focused, perfect for those who want their workouts to be intense. The open setting paired with professional coaching creates a motivating atmosphere, while its prime Baluwatar location makes it accessible for working professionals and city residents alike. If you're after a gym that goes beyond the basics and immerses you in a challenging, skill building environment, Tapout Fitness Nepal offers the tools, space and expertise to elevate your training."
          },
          {
            heading: "9. Grunt and Strain Fitness",
            content: "Location: Golfutar, Budanilkanta",
            subheading: "Amenities: Lockers, Shower, Parking",
            list: [
              "Opening Hours: 5:00 AM - 9:30 PM"
            ]
          },
          {
            content: "Grunt and Strain Fitness, located in Golfutar, Budanilkantha, delivers a holistic fitness experience that blends community, technique and top tier facilities. With a strong local following, it's quickly becoming a standout destination for both strength and movement training. Inside, you'll find a clean, well-spaced layout featuring resistance machines, free weights, and cardio equipment, alongside dedicated spaces for high energy activities like Zumba, Muay Thai, and Boxing. Whether you're here for traditional strength work or skill based training, the facility offers a smooth transition between workout styles without feeling crowded. The gym's energy is one of the strongest points, driven by motivating trainers who provide not just technical guidance, but also free nutrition advice and genuine encouragement. It's an environment where members of all fitness levels feel welcomed, challenged, and supported. Visually, the space is bright and organized, with clear functional zones that make navigation easy. The addition of a large Zumba hall and high tech Muay Thai arena sets it apart from typical gyms in the area, adding variety and excitement to your routine. At Grunt and Strain Fitness, you don't just work out, you build strength, skill and community."
          },
          {
            heading: "10. Banu's Total Fitness Center",
            content: "Location: Kamalpokhari, Kathmandu",
            subheading: "Amenities: Lockers, Showers and Sauna",
            list: [
              "Opening Hours: 6:00 AM - 9:00 PM (Sunday-Friday), 6:00 AM - 11:00 AM (Saturday)"
            ]
          },
          {
            content: "Located in the busy Kamalpokhari neighbourhood, Banu's Total Fitness Center is a well established local gym that has been serving fitness seekers since the early 1990s. Centrally positioned it has built its name on consistency and simplicity. Without the distractions of flash branding or upscale extras, it offers what matters the most: a clean, equipped space to lift, move and stay committed to your goals. The layout is straight forward- strength machines, cardio equipment, and free weights are well organized and easy to access, making it ideal for anyone who prefers to focus on workouts rather than the extras. The gym caters to a loyal base of regulars, with a friendly, welcoming vibe that reflects its local roots. It's not a class heavy gym, but for solo lifters or early risers looking for a solid session, Banu's delivers. If you prioritise routine, convenience, and clarity over bells and whistles, Banu's is a great fit especially if you're looking for a gym that is simple, consistent and dependable."
          },
          {
            heading: "Transform Your Fitness Journey with Meltdown",
            content: "The landscape of fitness in Kathmandu is thriving like never before. From gyms with carefully designed training environments to large scale clubs offering complete strength and cardio facilities, the Valley has grown into a hub for every kind of fitness enthusiast. Some spaces prioritize functional movement, others emphasise strength and conditioning."
          },
          {
            content: "But with so much variety, sticking to just one space can feel limiting. This is where Meltdown transforms the experience. With a single membership, you unlock access to the valley's best gyms, studios and wellness studios, designed for busy professionals and lifestyle driven members. We bring you the freedom to train wherever you want, whenever you want."
          }
        ],
        references: []
      }
    }
  };

  const blogPost = blogPosts[postId as keyof typeof blogPosts];

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.content.intro,
    "datePublished": new Date(blogPost.date).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Meltdown Wellbeing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Meltdown Wellbeing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://meltdownnepal.com/lovable-uploads/a44d1192-3b50-4319-8b71-b312a47bf095.png"
      }
    },
    "image": `https://meltdownnepal.com${blogPost.image}`,
    "url": `https://meltdownnepal.com/blog/${postId}`
  };

  return (
    <>
      <SEO
        title={blogPost.title}
        description={blogPost.content.intro}
        keywords={blogPost.id === 2 ? "Best gyms Kathmandu, top gyms Kathmandu Valley, fitness centers Nepal, gym reviews Kathmandu, workout facilities Nepal, Meltdown gym partners" : "Corporate wellness Nepal, employee wellbeing, workplace wellness programs, Meltdown Nepal"}
        canonical={`https://meltdownnepal.com/blog/${postId}`}
        ogImage={blogPost.image}
        ogType="article"
        structuredData={structuredData}
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
                            {item.includes(':') ? (
                              <>
                                <strong className="font-semibold">
                                  {item.split(':')[0]}:
                                </strong>
                                {item.split(':').slice(1).join(':')}
                              </>
                            ) : (
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* References */}
              {blogPost.content.references.length > 0 && (
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
              )}
            </article>

            {/* CTA Section */}
            <div className="mt-16 bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/20 text-center">
              <h3 className="text-2xl font-semibold font-header mb-4">
                {blogPost.id === 2 ? "Ready to Access These Top Gyms?" : "Ready to Transform Your Workplace?"}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {blogPost.id === 2 
                  ? "Get access to the best gyms in Kathmandu Valley with a single Meltdown membership. Train wherever you want, whenever you want."
                  : "Discover how Meltdown can help your company build a healthier, more engaged workforce through our comprehensive wellness programs."
                }
              </p>
              <Button asChild size="lg">
                <Link to="/schedule-demo">
                  {blogPost.id === 2 ? "Get Demo" : "Get Demo"}
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
