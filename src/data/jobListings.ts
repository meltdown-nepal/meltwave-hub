export interface Job {
  id: number;
  title: string;
  summary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  location: string;
  applyEmail: string;
  benefits: string[];
  deadline: string;
}

export const jobListings: Job[] = [
  {
    id: 3,
    title: "Social Media Manager",
    summary: "Manage and grow Meltdown Nepal's social media presence across Instagram, Facebook, and TikTok. Create compelling content, run paid campaigns, and ensure our digital brand remains creative, consistent, and ahead of the curve.",
    description: "We're looking for a creative, independent, and strategic Social Media Manager to take charge of our digital storytelling. You'll be responsible for planning and posting engaging content, capturing behind-the-scenes moments, running ads, and analyzing performance to help us grow. This role is perfect for someone with a passion for content, community, and fitness culture.",
    requirements: [
      "1+ year of experience managing social media for a brand, business, or influencer",
      "Strong content creation skills (photo, video, editing) using a phone camera",
      "Excellent writing skills for captions and campaign copy",
      "Knowledge of Meta Ads Manager and TikTok platform dynamics",
      "Familiarity with social media analytics tools",
      "Ability to work independently, meet deadlines, and adapt creatively"
    ],
    responsibilities: [
      "Manage and grow presence on Instagram, Facebook, and TikTok",
      "Plan, post, and schedule engaging content consistently",
      "Capture and edit content for the Meltdown App, fitness events, new launches, and promotional campaigns",
      "Write effective, brand-aligned captions and stories",
      "Run and manage paid ad campaigns and boost posts strategically",
      "Monitor insights, track engagement metrics, and improve strategy based on data",
      "Stay on top of trends and creatively apply them to keep Meltdown ahead of the curve"
    ],
    location: "Kathmandu, Nepal",
    applyEmail: "kriti.meltdown@gmail.com",
    benefits: [
      "Creative freedom and direct input in shaping our brand voice",
      "Opportunities to attend and cover Meltdown events",
      "A collaborative team that values your ideas and time",
      "Room to grow as we scale and expand in the wellness-tech space"
    ],
    deadline: "30th October 2025"
  },
  {
    id: 5,
    title: "HR Consultant (Part-time)",
    summary: "Part-time HR Consultant to build a high-performing, growth-driven culture by setting up strong HR systems, ensuring compliance, and fostering engagement and retention.",
    description: "We're looking for a proactive HR Consultant (part-time) to help us shape the foundation of our people and culture function. You'll manage HR operations, recruitment coordination, and administrative processes — while also driving initiatives that strengthen wellbeing, engagement, and performance across the team.\n\nYou'll work closely with the leadership team to design and implement systems that make our workplace efficient, compliant, and inspiring.\n\nPosition: Part-time (1 day/week)\nCommitment: On-site\nReports to: Leadership Team",
    requirements: [
      "3-5 years of experience in HR / People Operations / HR Consulting",
      "Strong understanding of HR processes, tools, and compliance",
      "Experience in setting up HRIS and automating workflows (preferred)",
      "Excellent communication, organization, and people skills",
      "Empathy-driven — passionate about creating a workplace people love",
      "Comfortable working part-time, independently, and in a startup environment"
    ],
    responsibilities: [
      "Coordinate and schedule interviews, issue offer letters, and maintain candidate communication",
      "Manage employee contracts, documentation, and records",
      "Partner with founders to develop HR policies aligned with company values",
      "Oversee payroll, leave management, and attendance",
      "Support performance reviews and career conversations",
      "Ensure legal and operational HR compliance",
      "Lead initiatives that promote wellbeing, recognition, and inclusion",
      "Provide administrative support for HR and office coordination tasks",
      "Set up or manage HRIS & payroll automation",
      "Conduct quarterly Employee NPS surveys and action plans",
      "Facilitate monthly recognition sessions celebrating team wins",
      "Publish Quarterly People Pulse Reports summarizing engagement and wellbeing trends"
    ],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: [
      "Help design the culture of a growing wellbeing-focused company",
      "Flexible hours and supportive leadership",
      "Opportunity to create visible impact on people and systems",
      "Be part of a purpose-driven mission around health, wellbeing, and performance"
    ],
    deadline: "30th October 2025"
  },
  {
    id: 6,
    title: "Chief Product Officer (Technology)",
    summary: "Lead the next evolution of Meltdown by owning the entire product lifecycle - defining vision, setting strategy, and building experiences that keep employees active, connected, physically & mentally strong.",
    description: "We're looking for a bold, user-obsessed Chief Product Officer (CPO) to lead the next evolution of Meltdown. If you're energized by the idea of shaping the future of workplace wellbeing, driving innovation from user research to product design, and aligning technology with human behavior — this role is for you.\n\nYou'll own Meltdown's entire product lifecycle: defining vision, setting strategy, and building experiences that keep employees active, connected, physically & mentally strong. Working closely with design, data, and engineering teams, you'll turn insights into delightful features that drive real-world engagement.\n\nPosition: Senior Level",
    requirements: [
      "7+ years in product management, product leadership, or growth roles, ideally in wellness, healthtech, or consumer SaaS",
      "Proven track record of building and scaling products that drive user engagement and retention",
      "Experience with data analytics tools (Mixpanel, Amplitude, etc) and A/B testing frameworks",
      "Strong understanding of UX principles, gamification, and user psychology",
      "Ability to lead teams across product, design, and engineering",
      "Excellent communication, prioritization, and stakeholder management skills"
    ],
    responsibilities: [
      "Define and execute Meltdown's product strategy and roadmap aligned with our mission and business goals",
      "Lead user research and behavioral insights to design features that drive daily engagement and long-term retention",
      "Own product development from concept to launch, balancing user delight with scalability and performance",
      "Prioritize feature development through data, experimentation, and feedback loops",
      "Collaborate deeply across design, engineering, marketing, and partnerships to ensure seamless product delivery",
      "Develop product metrics and dashboards to track usage, retention, and growth",
      "Oversee UX, app experience, and product-market fit — ensuring Meltdown stays loved by users and trusted by clients",
      "Build the foundation for scalable systems and documentation to support future in-house growth"
    ],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: [
      "Your work directly impacts how thousands of people move, think, and feel every day",
      "Help redefine employee wellness as a core driver of organizational culture and performance",
      "Small, ambitious team with a big mission",
      "Opportunity to shape a product that improves lives and builds better workplaces"
    ],
    deadline: "30th November 2025"
  }
];