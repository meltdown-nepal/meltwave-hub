import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogPost = () => {
  const { postId } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Corporate Wellness: Why Employee Health is Business Success",
      slug: "future-corporate-wellness-employee-health-business-success",
      excerpt: "Discover how forward-thinking companies are transforming their workplace culture through comprehensive wellness programs that boost productivity, reduce healthcare costs, and create happier, more engaged teams.",
      content: `
        The landscape of corporate wellness is evolving rapidly. What once consisted of basic health insurance and perhaps an annual health fair has transformed into comprehensive, data-driven programs that address the whole employee—mind, body, and spirit.

        Why Corporate Wellness Matters More Than Ever

        In today's competitive job market, employees are looking beyond salary and benefits. They want employers who genuinely care about their wellbeing. Companies that invest in robust wellness programs see remarkable returns:

        - **40% reduction in healthcare costs** through preventive care and early intervention
        - **25% increase in employee productivity** from reduced stress and improved mental clarity  
        - **50% lower turnover rates** as employees feel valued and supported
        - **Enhanced company reputation** that attracts top talent

        The Modern Approach to Employee Wellness

        Today's most successful wellness programs go far beyond traditional offerings. They include:

        Physical Wellness
        - On-site fitness facilities or gym partnerships
        - Ergonomic workspace assessments
        - Nutrition counseling and healthy meal options
        - Regular health screenings and preventive care

        Mental Health Support
        - Employee assistance programs (EAPs)
        - Mindfulness and stress management workshops
        - Mental health days and flexible time off
        - Professional counseling services

        Work-Life Balance
        - Flexible working arrangements
        - Remote work options
        - Family support services
        - Time management training

        Social Connection
        - Team building activities
        - Volunteer opportunities
        - Wellness challenges and competitions
        - Support groups and communities

        Implementing a Successful Program

        The key to a successful corporate wellness program lies in:

        1. Leadership commitment- When executives actively participate, employees follow
        2. Personalization- One-size-fits-all doesn't work; programs must adapt to diverse needs
        3. Data-driven decisions- Regular measurement and adjustment based on results
        4. Sustained engagement - Keeping programs fresh and relevant over time

        The ROI of Wellness Investment

        Companies investing in comprehensive wellness programs typically see:
        - Every $1 spent returns $2.30 in reduced healthcare costs
        - 28% reduction in sick days
        - 26% reduction in health insurance premiums
        - Significant improvements in employee satisfaction scores

        Looking Forward

        The future of corporate wellness is bright, with emerging trends including:
        - AI-powered personalized health recommendations
        - Virtual reality fitness and meditation experiences
        - Biometric monitoring and real-time health insights
        - Integration with wearable technology

        Companies that embrace this evolution will not only see improved bottom lines but will build stronger, more resilient teams prepared for the challenges ahead.

        *Ready to transform your workplace wellness program? Contact our team to learn how we can help you create a comprehensive solution tailored to your company's unique needs.*
      `,
      author: "Jayani Subedi",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["Corporate Wellness", "Employee Health", "Business Strategy", "ROI"],
      image: "/lovable-uploads/HappyEmployees.webp"
    },
    {
      id: 2,
      title: "Top 10 Gyms in Kathmandu Valley",
      slug: "top-10-gyms-kathmandu-valley",
      excerpt: "Discover the best gyms in Kathmandu Valley with comprehensive reviews of facilities, amenities, and what makes each one unique for your fitness journey.",
      content: `
        Looking for the best gyms in Kathmandu? Well, you're not alone. With Kathmandu's fitness culture quickly evolving, demands for gyms that serve quality and needs have never been higher. With so many options available it can be confusing to choose the best one for you.   

        At Meltdown, we are proud to be partnered with some of the most trusted and well equipped gyms around Kathmandu valley. These gyms not only provide you the space to grow strong but also the best trainers, equipment and environment in the valley.  

        Whether you're chasing a six pack, building strength or just showing up for yourself, the right gym can make all the difference. Here are the Top Ten Gyms in Kathmandu valley, where you can train smart, feel stronger and stay consistent.

        1. The Pump
        **Locations:** Jhamsikhel and Chahabail  
        **Amenities:** Lockers, Showers, Parking  
        **Opening Hours:** 5:30 AM - 8:30 PM (Monday-Saturday), 7:00 AM - 12:00 PM (Sunday)

        The pump, with locations in Chahabail and Jhamsikhel is arguably one of the best well rounded fitness centres in Kathmandu valley. What sets pump apart from the rest is its excellent balance between traditional strength training and functional fitness. The gym floor is equipped with high-end machines for both resistance training and cardio along with a well maintained free weight section and dedicated section for stretching and body weight work. The members are most benefited by the thoughtful design that avoids overcrowding even at peak hour, creating a calm and focused training environment. The Pump is appealing to working professionals, disciplined listers and lifestyle focused people alike. It avoids the chaotic energy of the overly commercialised gyms and instead provides a well structured and motivating space where you can genuinely grow and improve. Whether you're looking for strength, endurance and mobility or just a reliable gym, The pump offers in all fronts- making it one of the best gyms in the valley.

        2. Total Physical Fitness Center (TPFC)
        **Location:** New Baneshowr  
        **Amenities:** Lockers, Shower, Sauna  
        **Opening Hours:** 5:30 PM - 9:00 PM (Sunday-Friday), 5:30 PM - 7:00 PM (Saturday)

        Known for its large training floor, versatile workout zones, and professional setup, TPFC is one of the most well equipped and spacious fitness centers in the valley. TPFC blends scale with quality, making it a top tier choice for both beginners and seasoned gym-goers. The gym offers a full spectrum of training zones from modern strength machines and free weights to a well equipped cardio area and open functional spaces. TPFC stands out because of its range: from modern strength and cardio classes to high energy group classes like kickboxing and boxing, the gym caters to diverse training classes. In terms of comfort TPFC does not compromise. Their facilities include sauna and steam rooms along with hot and cold showers. One of its most underrated strengths is ample on-site parking, making it one of the few large gyms in the valley where accessibility isn't a hassle. Any time, any style TPFC is built to support a wide range of fitness goals, if you value quality, variety and space this is the gym for you.

        3. Hilton Fitness
        **Location:** Dibeshowr planning, Bhaktapur  
        **Amenities:** Lockers, Shower, Sauna and Steam, Jacuzzi  
        **Opening Hours:** 5:00 AM - 9:00 PM (All week)

        Hilton Fitness is a polished, full service gym offering a modern and wellness forward environment. Located in the heart of Bhaktapur, it brings a premium, wellness focused training experience to the eastern side of the valley. The space is organized and is equipped with modern strength training machines, free weights, and a dedicated cardio section, making it suitable for both beginners and serious lifters. Hilton's emphasis on balance, not just training styles but in lifestyle is what sets it apart from the others. Beyond the gym floor, members get access to a full suite of recovery-focused amenities, including a sauna, steam room and jacuzzi. These wellness add-ons make it easy to wind down post-workout and turn a simple gym visit into a full self care session. Hilton also offers a solid rotation of group classes, including zumba, aerobics and body-weight focused sessions, perfect for people trying to stay consistent through the movement community Hilton fitness is an excellent fit for wellness enthusiasts or anyone in Bhaktapur looking to train in a calm, elevated environment, where both physical progress and recovery are part of the experience.

        4. Rush Fitness
        **Location:** Bansbari, Kathmandu  
        **Amenities:** Locker, Shower, Parking  
        **Opening Hours:** 6:00 AM - 8:00 PM (Sunday-Friday), 6:00 AM - 12:00 PM (Saturday)

        Rush Fitness Nepal, located in Bansbari, is a dynamic and modern fitness gym that caters to versatility and functionality in every corner. The gym stands out for its commitment to functional training and performance driven programming. From high quality resistance machines to open areas for mobility, strength, and cardio, the space is thoughtfully laid for efficient and versatile workouts. The atmosphere is energetic yet welcoming, ideal for lifters, movement enthusiasts, and consistency driven members. Their balance between functional training and traditional gym is what differentiates Rush from the rest, the members can easily switch between strength, endurance and mobility sessions. Open facility layout and organized equipment placement make it easy to navigate without feeling crowded, even during peak hours. Rush has a visually fresh environment with ample space and greenery around the gym, not to mention convenient on site parking, which is quite rare in dense areas of the city. For a space that fuels your grind and keeps you inspired, Rush Fitness Nepal blends smart training options with a sleek, motivating environment, where every sweat takes you closer to your best self.

        5. ROC Fitness Clubs
        **Locations:** Tinkune / Jadibuti  
        **Amenities:** Shower, Locker, Parking  
        **Opening Hours:** 7:00 AM - 9 PM (Sunday - Friday, Closed on Saturday)

        ROC Fitness Club, with its flagship branch in Tinkune and a newer space in Jadibuti (V2.0), has steadily grown into one of the valley's most trusted names in strength and conditioning. It's not just another gym; ROC is built around a performance-driven culture where serious training meets solid structure. Their team of certified trainers adds value with well guided programs that support your growth. At Roc, the environment is thoughtfully designed to support focused and effective training. They have a full range of modern equipment, from strength machines and free weights to a dedicated cardio section. ROC is a gym with consistent energy, a supportive environment and a crowd that's here to work. From group classes to focused training zones in both branches, they've created a gym culture that's motivating but never overwhelming. From first milestones to major breakthroughs, ROC Fitness Club offers the structure, support, and energy needed to move with purpose and stay consistent.

        6. Athlete Land
        **Location:** Balkumari, Lalitpur  
        **Amenities:** Lockers, Shower and Sauna  
        **Opening hours:** 24 hours (Sunday-Friday), Saturday (6 AM - 12 PM)

        If your training is non negotiable, Athlete Land Training Club in Balkumari, Lalitpur is ready anytime, literally. With round-the-clock access, this performance-first space blends weightlifting, mobility, and combat-style fitness under one roof. They have a spacious gym floor that is well equipped with high quality resistance machines, a solid free weights section and a large area dedicated to mobility, boxing and functional drills. Athlete Land also offers specialized group classes, from strength circuits to boxing and body weight focused programs, making it easy to stay consistent with carried movement styles. What makes Athlete Land shine is its grounded, community-centered energy and the freedom to train anytime. As a 24 hours facility, it removes the barrier of time, letting members stick to their own rhythm and routine. This is the place where you show up, put in work and walk out stronger every week. Athlete Land stands out for those who want to train and train whenever it works for them.

        7. Regal Fitness Club
        **Location:** Kamalpokhari/teku  
        **Amenities:** Lockers, shower

        With locations in City Centre, Kamalpokhari and Teku, Regal Fitness Club brings a polished, performance meets luxury gym experience to the busy Kathmandu Valley. It blends effective training with comfort and recovery, making it a standout choice for those who value result and ambiance. The gym is equipped with premium strength training machines, a full range of cardio equipment, free weights and functional zones that accommodate everything from heavy lifts to mobility work. Regal maintains a clean, spacious environment with structured membership tiers catering to students, professionals and fitness enthusiasts. Despite its upscale feel, the vibe remains grounded. Trainers are approachable, the energy is focused, and the layout avoids the chaos often found in trend driven gyms. With a balance of well maintained gym equipment, thoughtful design, and premium features, Regal Fitness Club is perfect for those who want a solid gym floor with a bit of wellness indulgence, all under one roof.

        8. Tapout Fitness
        **Location:** Baluwatar, Kathmandu  
        **Amenities:** Shower, Locker, Parking  
        **Opening Hours:** 6:00 AM - 9:00 PM

        Located in Baluwatar, Kathmandu, Tapout Fitness is a high energy fitness destination that blends combat sport with functional training for a truly dynamic experience. The facility is equipped with dedicated spaces for MMA, Kickboxing, and strength training, alongside cardio and conditioning areas. Expert trainers guide members through technical skill work, high intensity drills, and strength sessions, making it an ideal space for both fighters in training and fitness enthusiasts seeking variety. Tapout's layout allows for seamless transitions between combat zones, free weight areas and cardio stations. The environment is electric yet focused, perfect for those who want their workouts to be intense. The open setting paired with professional coaching creates a motivating atmosphere, while its prime Baluwatar location makes it accessible for working professionals and city residents alike. If you're after a gym that goes beyond the basics and immerses you in a challenging, skill building environment, Tapout Fitness Nepal offers the tools, space and expertise to elevate your training.

        9. Grunt and Strain Fitness
        **Location:** Golfutar, Budanilkanta  
        **Amenities:** Lockers, Shower, Parking  
        **Opening Hours:** 5:00 AM - 9:30 PM

        Grunt and Strain Fitness, located in Golfutar, Budanilkantha, delivers a holistic fitness experience that blends community, technique and top tier facilities. With a strong local following, it's quickly becoming a standout destination for both strength and movement training. Inside, you'll find a clean, well-spaced layout featuring resistance machines, free weights, and cardio equipment, alongside dedicated spaces for high energy activities like Zumba, Muay Thai, and Boxing. Whether you're here for traditional strength work or skill based training, the facility offers a smooth transition between workout styles without feeling crowded. The gym's energy is one of the strongest points, driven by motivating trainers who provide not just technical guidance, but also free nutrition advice and genuine encouragement. It's an environment where members of all fitness levels feel welcomed, challenged, and supported. Visually, the space is bright and organized, with clear functional zones that make navigation easy. The addition of a large Zumba hall and high tech Muay Thai arena sets it apart from typical gyms in the area, adding variety and excitement to your routine. At Grunt and Strain Fitness, you don't just work out, you build strength, skill and community.

        10. Banu's Total Fitness Center
        **Location:** Kamalpokhari, Kathmandu  
        **Amenities:** Lockers, Showers and Sauna  
        **Opening Hours:** 6:00 AM - 9:00 PM (Sunday - Friday), 6:00 AM - 11:00 AM (Saturday)

        Located in the busy Kamalpokhari neighbourhood, Banu's Total Fitness Center is a well established local gym that has been serving fitness seekers since the early 1990s. Centrally positioned it has built its name on consistency and simplicity. Without the distractions of flash branding or upscale extras, it offers what matters the most: a clean, equipped space to lift, move and stay committed to your goals. The layout is straight forward- strength machines, cardio equipment, and free weights are well organized and easy to access, making it ideal for anyone who prefers to focus on workouts rather than the extras. The gym caters to a loyal base of regulars, with a friendly, welcoming vibe that reflects its local roots. It's not a class heavy gym, but for solo lifters or early risers looking for a solid session, Banu's delivers. If you prioritise routine, convenience, and clarity over bells and whistles, Banu's is a great fit especially if you're looking for a gym that is simple, consistent and dependable.

        Conclusion

        The landscape of fitness in Kathmandu is thriving like never before. From gyms with carefully designed training environments to large scale clubs offering complete strength and cardio facilities, the Valley has grown into a hub for every kind of fitness enthusiast. Some spaces prioritize functional movement, others emphasise strength and conditioning.

        But with so much variety, sticking to just one space can feel limiting. This is where Meltdown transforms the experience. With a single membership, you unlock access to the valley's best gyms, studios and wellness studios, designed for busy professionals and lifestyle driven members. We bring you the freedom to train wherever you want, whenever you want.
      `,
      author: "Pradeep Shrestha",
      date: "2024-03-20",
      readTime: "12 min read",
      tags: ["Fitness", "Gyms", "Kathmandu", "Health", "Exercise"],
      image: "/lovable-uploads/WellnessSessions.webp"
    }
  ];

  const blogPost = blogPosts.find(post => post.id === parseInt(postId || '1'));

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${blogPost.title} | Meltdown Nepal Blog`}
        description={blogPost.excerpt}
        canonical={`https://meltdownnepal.com/blog/${blogPost.id}`}
        ogImage={blogPost.image}
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blogPost.title,
          "description": blogPost.excerpt,
          "image": blogPost.image,
          "author": {
            "@type": "Person",
            "name": blogPost.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Meltdown Nepal",
            "logo": {
              "@type": "ImageObject",
              "url": "https://meltdownnepal.com/logo.png"
            }
          },
          "datePublished": blogPost.date,
          "dateModified": blogPost.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://meltdownnepal.com/blog/${blogPost.id}`
          }
        }}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
              ← Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Hero Image */}
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="p-6 md:p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blogPost.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {blogPost.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b">
                <span>By {blogPost.author}</span>
                <span>•</span>
                <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>•</span>
                <span>{blogPost.readTime}</span>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {blogPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('- ') || paragraph.includes('\n- ')) {
                    const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 mb-6">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">
                            <span dangerouslySetInnerHTML={{
                              __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            }} />
                          </li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.includes('**')) {
                    return (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed"
                         dangerouslySetInnerHTML={{
                           __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                         }}
                      />
                    );
                  } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                    return (
                      <p key={index} className="text-gray-600 italic text-center my-8 p-4 bg-gray-50 rounded-lg">
                        {paragraph.replace(/^\*|\*$/g, '')}
                      </p>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Wellness Journey?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              {blogPost.id === 2 
                ? "Join Meltdown and get access to the best gyms and wellness centers across Kathmandu Valley with a single membership."
                : "Let us help you create a comprehensive wellness program that drives real results for your team and business."
              }
            </p>
            <Button asChild size="lg">
              <Link to="/schedule-demo">
                Get Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
