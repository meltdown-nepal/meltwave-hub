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
    id: 1,
    title: "Sales Manager",
    summary: "Mid-level full-time on-site role managing and growing corporate accounts, building client relationships, and driving sales for our corporate wellbeing tech ecosystem.",
    description: "This is a full-time on-site role for a Sales Manager, based in Kathmandu. The role will be responsible for managing and growing corporate accounts, building and maintaining relationships with clients, driving sales, and providing exceptional client service. Daily tasks include identifying new business opportunities, creating sales strategies, presenting solutions to corporate clients, and achieving sales targets. This role requires strong communication, negotiation, and interpersonal skills.\n\nPosition: Mid-Level",
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
    ],
    deadline: "30th October, 2024"
  },
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
    deadline: "30th October, 2024"
  },
  {
    id: 4,
    title: "Digital Marketing Associate",
    summary: "Oversee website and social platforms, optimize SEO, plan content, manage performance metrics, and work with Content Team to ensure brand consistency and measurable growth.",
    description: "Meltdown is Nepal's leading platform for corporate wellness, community events, group fitness programs, and coach development. We exist to break barriers to healthy living through engaging wellness solutions. Our digital presence is how we tell our story—and we're looking for someone to own that space! We're seeking a Digital Marketing Executive who understands both strategy and execution. You'll oversee our website and social platforms, optimize SEO, plan and schedule content, manage performance metrics, and work closely with the Content Team to ensure brand consistency and measurable growth.",
    requirements: [
      "2+ years experience in digital marketing or similar roles",
      "Strong grasp of SEO, Google Analytics, Meta Business Suite, and scheduling tools (like Buffer, Hootsuite)",
      "Basic content creation skills (e.g. Canva, simple video edits, or caption writing)",
      "Ability to manage multiple projects and collaborate cross-functionally",
      "Data-driven with an understanding of KPIs and performance reporting"
    ],
    responsibilities: [
      "Optimize all web pages for search engine performance (SEO: on-page, off-page, and technical)",
      "Conduct keyword research and update meta titles/descriptions regularly",
      "Work with the tech/design team to improve UI/UX, page speed, and performance",
      "Plan and maintain the social media content calendar",
      "Write captions, schedule posts, and manage uploads across Instagram, Facebook, LinkedIn, and YouTube",
      "Plan campaigns based on Meltdown's core verticals (Corporate Wellbeing, Events, Gyms, Academy)",
      "Assign tasks to the Content Team (designers, writers, video editors) and follow up to ensure delivery",
      "Track website traffic, keyword ranking, engagement, reach, and conversions",
      "Generate weekly and monthly performance reports with insights and actionable suggestions",
      "Identify trends, emerging platforms, and engagement tactics to experiment with"
    ],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: [
      "Competitive salary with performance-based growth",
      "High growth rate in the tech and corporate wellness sector",
      "Attractive incentives based on performance",
      "5-day work week (Monday to Friday)",
      "Exclusive access to Meltdown's wellbeing services"
    ],
    deadline: "30th October, 2024"
  }
];