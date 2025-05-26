import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";

interface Job {
  id: number;
  title: string;
  summary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  location: string;
  applyEmail: string;
  benefits: string[];
}

const jobListings: Job[] = [
  {
    id: 1,
    title: "Sales Manager",
    summary: "Full-time on-site role managing and growing corporate accounts, building client relationships, and driving sales for our corporate wellbeing tech ecosystem.",
    description: "Meltdown is a corporate wellbeing tech ecosystem designed for companies who want to not just offer wellness benefits but build a culture of active living. Unlike typical gym subsidies or one-off wellness sessions - which most employees don't use - Meltdown combines access to wellness services across Nepal with gamified challenges, social experiences, and behavior tracking that drive participation and build team connection. This is a full-time on-site role for a Sales Manager, based in Kathmandu. The role will be responsible for managing and growing corporate accounts, building and maintaining relationships with clients, driving sales, and providing exceptional client service.",
    requirements: [
      "2-4 years experience in Sales Execution",
      "Strong track record to exceed sales targets",
      "Strong Communication Skills and Account Management Skills",
      "Strong networking and relationship-building abilities",
      "Bachelor's degree in Business, Marketing, or related field. Master's degree is a plus."
    ],
    responsibilities: [
      "Identify, target, and convert potential corporate clients through strategic outreach and relationship-building",
      "Develop and execute sales strategies to meet and exceed revenue goals",
      "Build and manage a pipeline of qualified leads and track progress through the sales cycle",
      "Conduct effective sales presentations and negotiations tailored to client needs",
      "Maintain strong post-sales relationships to ensure client satisfaction and retention",
      "Work closely with marketing team to align on campaign strategies and brand positioning",
      "Manage and mentor junior sales team members, providing guidance and performance feedback",
      "Provide regular sales forecasts, reporting, and market insights to the leadership team",
      "Represent Meltdown at networking events, conferences, and wellness expos"
    ],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: [
      "Competitive salary with performance-based growth",
      "High growth rate in the tech and corporate wellness sector",
      "Attractive incentives based on performance",
      "5-day work week (Monday to Friday)",
      "Exclusive access to Meltdown's wellbeing services"
    ]
  },
  {
    id: 2,
    title: "Partner Relations Associate",
    summary: "Junior level position focused on expanding and managing Meltdown's network of wellness service providers to build strong partnerships across Nepal.",
    description: "We are looking for a Partner Relations Associate to join our growing team in Kathmandu. This is a full-time, on-site role focused on expanding and managing Meltdown's network of wellness service providers—including fitness centers, wellness studios, wellbeing professionals, and wellness activities—based on the needs and demands of corporate employees. The ideal candidate is passionate about building relationships, and committed to delivering quality experiences. You'll work closely with internal teams to ensure our partners are well-aligned with Meltdown's goals of driving engagement, experience, and high standards in service delivery.",
    requirements: [
      "1 year of experience in business development, hospitality, community engagement, or related roles",
      "Strong communication and interpersonal skills",
      "Ability to manage multiple partnerships and prioritize tasks effectively",
      "Detail-oriented, self-motivated, and proactive",
      "Bachelor's degree in Business, Marketing, Hospitality, or related field"
    ],
    responsibilities: [
      "Identify, evaluate, and onboard wellness centers and service providers that align with employee needs",
      "Regularly visit partner locations to ensure quality and service standards are maintained",
      "Develop and maintain strong, collaborative relationships with partner facilities and professionals",
      "Negotiate terms and draft partnership agreements with service providers",
      "Stay updated on emerging wellness trends, tools, and offerings to enhance Meltdown's service portfolio",
      "Prepare reports and insights for management to inform decision-making and experience improvements"
    ],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: [
      "Competitive salary with performance-based growth",
      "High growth rate in the tech and corporate wellness sector",
      "Attractive incentives based on performance",
      "5-day work week (Monday to Friday)",
      "Exclusive access to Meltdown's wellbeing services"
    ]
  },
  {
    id: 3,
    title: "Events Manager",
    summary: "Lead end-to-end planning and execution of events, from weekly runs to quarterly flagship events, while managing partnerships and driving community engagement.",
    description: "We're looking for a proactive, creative, and hands-on Event Manager who can take complete ownership of events from concept to execution. You'll lead the events team, bring fresh ideas to life, and ensure every event aligns with our mission—to activate people and connect communities through wellness. This role involves leading weekly runs, corporate wellness events, and quarterly flagship events while building strategic partnerships and continuously innovating event formats.",
    requirements: [
      "Proven experience (1+ years) organizing and leading events",
      "Strong leadership, delegation, and coordination skills",
      "Creative thinking with an understanding of fitness and wellness trends",
      "Experience in sponsorship outreach and brand partnerships",
      "Excellent time management and communication skills",
      "Proficient with event planning tools (Google Sheets, Notion, etc.)"
    ],
    responsibilities: [
      "Lead end-to-end planning and execution of events (weekly runs, corporate wellness events, and quarterly flagship events)",
      "Create event concepts that reflect our mission and engage diverse audiences",
      "Prepare detailed event checklists, assign tasks, and ensure accountability within the team",
      "Lead and manage the Events Team, ensuring clear delegation and communication",
      "Coordinate with logistics, marketing, wellness, and sales teams for seamless delivery",
      "Identify and secure collaborations with fitness brands, wellness companies, and sponsors",
      "Build strategic relationships that add value and visibility to events",
      "Continuously bring new event formats, activities, and themes to enhance participation",
      "Track KPIs including attendance, engagement, revenue, and partnerships",
      "Submit weekly and monthly reports to management"
    ],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: [
      "Competitive salary with performance-based growth",
      "High growth rate in the tech and corporate wellness sector",
      "Attractive incentives based on performance",
      "5-day work week (Monday to Friday)",
      "Exclusive access to Meltdown's wellbeing services"
    ]
  },
  {
    id: 4,
    title: "Marketing Specialist",
    summary: "Drive brand awareness and member acquisition through creative marketing campaigns.",
    description: "Join our marketing team to help grow the Meltdown brand and expand our reach in the corporate wellness space. You'll develop and execute marketing campaigns, manage social media presence, create engaging content, and analyze campaign performance. This role is perfect for a creative marketer passionate about health and wellness.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "2+ years of digital marketing experience",
      "Proficiency in social media management and content creation",
      "Experience with email marketing and CRM systems",
      "Strong analytical skills and attention to detail"
    ],
    responsibilities: [],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: []
  },
  {
    id: 5,
    title: "Sales Associate",
    summary: "Junior level position assisting in lead generation, client outreach, and supporting sales efforts to expand Meltdown's reach across companies.",
    description: "Meltdown is a corporate wellbeing tech ecosystem designed for companies who want to not just offer wellness benefits but build a culture of active living. Unlike typical gym subsidies or one-off wellness sessions - which most employees don't use - Meltdown combines access to wellness services across Nepal with gamified challenges, social experiences, and behavior tracking that drive participation and build team connection. This is a full-time, on-site role for a Sales Associate, based in Kathmandu. The Sales Associate will assist in generating leads, conducting outreach, supporting client meetings, and maintaining CRM records. The ideal candidate is enthusiastic, motivated, and eager to learn and grow in the sales field, with a passion for health, fitness, and corporate wellness. You'll work closely with the sales and marketing team to support overall business development efforts and play a key role in expanding Meltdown's reach across companies.",
    requirements: [
      "1 year of experience in sales, management, marketing, or customer service",
      "Strong communication and interpersonal skills",
      "Self-motivated, goal-oriented, and eager to learn",
      "Bachelor's degree in Business, Marketing, or related field (ongoing studies may also be considered)"
    ],
    responsibilities: [
      "Assist in identifying and reaching out to potential corporate clients",
      "Support the sales team in preparing presentations and proposals",
      "Maintain accurate records of leads and customer interactions using CRM tools",
      "Follow up with prospects and clients to support conversion and retention",
      "Attend meetings, wellness events, and sales activations",
      "Support the execution of client onboarding and feedback collection",
      "Stay updated with Meltdown services and the wellness industry"
    ],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: [
      "Competitive salary with performance-based growth",
      "High growth rate in the tech and corporate wellness sector",
      "Attractive incentives based on performance",
      "5-day work week (Monday to Friday)",
      "Exclusive access to Meltdown's wellbeing services"
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleApplyNow = () => {
    // TODO: Replace with actual Google Form URL
    const googleFormUrl = "https://forms.google.com/your-form-url";
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Meltdown Team
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Help us transform corporate wellness and make a positive impact on people's lives. 
              We're looking for passionate individuals who share our vision of creating healthier workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover exciting career opportunities at Meltdown and become part of our mission to promote wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {jobListings.map((job) => (
              <Card key={job.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {job.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {job.summary}
                  </p>
                  <Button 
                    onClick={() => handleJobClick(job)}
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-black transition-colors"
                  >
                    View More Information
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <Dialog open={!!selectedJob} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedJob.title}
                </DialogTitle>
                <DialogDescription className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  {selectedJob.location}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedJob.responsibilities.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <Button 
                    onClick={handleApplyNow}
                    className="w-full bg-primary hover:bg-secondary text-black font-semibold"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;
