
export interface Question {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSection {
  id: string;
  title: string;
  questions: Question[];
}

export const faqData: FaqSection[] = [
  {
    id: 'general',
    title: '💼 General Understanding',
    questions: [
      {
        id: 'what-is-meltdown',
        question: 'What is Meltdown?',
        answer: `Meltdown is a corporate wellbeing platform that provides companies with a system to get their workforce leading an active lifestyle and connect with each other through wellness. Our system allows companies to organise challenges, recognise achievers and reward them to boost team morale and help the team feel their best in terms of mental health and overall wellbeing.

Our employee app allows employees access to multiple different wellness services like health counseling, yoga, gym & cardio, group classes, swimming, rock climbing, and many more services under one membership.`
      },
      {
        id: 'how-does-meltdown-work',
        question: 'How does Meltdown work for companies and employees?',
        answer: `For companies: Companies subscribe to the meltdown system and purchase a package based on the workforce size and number of employees that would like to access multiple wellness services.

For employees: This gives your employees access to an app where they can compete and also select a package that suits their personal interests. The packages seen in the app are offered at subsidized rates, exclusive for your employees.`
      },
      {
        id: 'types-of-wellness-services',
        question: 'What types of wellness services do you offer?',
        answer: `Meltdown Corporate Wellbeing System Includes:

1. HR Dashboard
• User Management: Easily add or remove employee access
• Track Engagement: Monitor usage and participation metrics
• Comprehensive Reporting: Gain insights into the impact of wellness initiatives

2. Employee App
• Access Multiple Services: Employees can choose from a variety of wellness services with one membership
• Subsidized Packages: Affordable rates available directly on the app
• Seamless Check-In: Single-scan access to partner locations any day, anywhere

3. Wellness Challenges
• Leadership Boards: Organize challenges to motivate employees
• Rewards and Recognition: Encourage participation and build a culture of activity

4. Wellness Consulting
• Strategic Engagement: Tailored solutions to overcome specific company challenges
• Expert Support: Guidance from wellness professionals to maximize engagement

5. Monthly Wellness Resources
• Employee Handouts: Informative resources on nutrition, exercise plans, and habits resources, goal setting, and many more`
      },
      {
        id: 'what-makes-different',
        question: 'What makes Meltdown different from other wellness platforms?',
        answer: `Every individual has different needs and preferences. Traditional wellness services focus on providing a single solution that does not meet the requirement of a diverse group and therefore the biggest challenge companies are facing is engagement of their team into wellness. Almost 80% of people in companies are not leading an active lifestyle.

Meltdown offers:
• Accessibility: freedom to go anywhere at any day
• Variety: Try different activities and find what you love
• Affordability: Prices are exclusive for Companies at more than half of actual cost
• Community: We create a culture for your company where movement is normalised through gamification and wellness challenges`
      }
    ]
  },
  {
    id: 'business',
    title: '💰 Business Model',
    questions: [
      {
        id: 'pricing-work',
        question: 'How does the pricing work for companies?',
        answer: `Company Subscription:
Subscribe to the Meltdown Wellbeing System for Rs. x amount per month (billed semi-annually or annually) for the system. This allows unlimited user access for challenges and also provides employees access to subscribe to subsidized wellness packages if they want.

Employee Access:
Employees receive access to the Meltdown app.
Employees can choose one of the following packages at subsidized rates:
• Basic Package: Access to 20+ gyms
• Gold Package: Access to 40+ wellness options - Includes yoga, mindfulness, boxing, group classes, golfing, gym, and bouldering
• Platinum Package: Access to 70+ wellness options - Includes Gold Package benefits plus swimming, mental health counselling, physiotherapy and steam/sauna
• Diamond Package: Coming soon`
      },
      {
        id: 'services-per-day',
        question: 'How many services can employees access in a day?',
        answer: 'Employees get 1 check in per day'
      },
      {
        id: 'subsidized-packages',
        question: 'How are you able to provide such subsidized wellness packages?',
        answer: 'Wellness service providers, you the company and Meltdown combine the subsidy that the employees receive. These rates are exclusive for companies.'
      },
      {
        id: 'minimum-commitment',
        question: 'Is there a minimum commitment or contract duration?',
        answer: 'Yes. We have a minimum of 6 months. This helps us maintain the cash flow needed to provide the exclusive pricing employees get.'
      }
    ]
  },
  {
    id: 'engagement',
    title: '👥 Employee Engagement',
    questions: [
      {
        id: 'encourage-participation',
        question: 'How do you encourage employees to participate?',
        answer: `Our gamification feature allows companies to conduct wellness challenges, recognise and reward active leaders. Employees can compete in step challenges without subscribing to any package.

We encourage companies to Recognize and reward employees who actively participate in activities or achieve fitness milestones. This can be done through incentives, certificates, awards, or public recognition within the company. Such recognition creates a positive atmosphere and motivates employees to prioritize their health.

By normalizing movement within the company, we make moving fun for all.`
      },
      {
        id: 'ensure-consistency',
        question: 'How do you ensure employees stay consistent with their activities?',
        answer: `Our leadership board, streaks and rewards keep user engaged for achieving new milestones.

We have a check in streak that motivates people to achieve personal best.

As your team members become accountability partners, staying consistent becomes fun.`
      },
      {
        id: 'inactive-employees',
        question: 'What happens if most employees remain inactive?',
        answer: 'We work together with the HR to understand key challenges and provide solutions that can help increase engagement. Our company is built with the mission to create innovative solutions that empower people to lead an active lifestyle and connect through wellness so we will continuously be developing new features to keep the team engaged.'
      },
      {
        id: 'different-fitness-levels',
        question: 'How do you address employees with different fitness levels and preferences?',
        answer: 'The app has something for all age groups. Individuals can select what they wish to do and try activities they love.'
      }
    ]
  },
  {
    id: 'technology',
    title: '⚙️ Technology and Operations',
    questions: [
      {
        id: 'app-offers',
        question: 'What does the app offer?',
        answer: 'The app offers 3 packages (Basic, Gold, Platinum) for employees to choose from. The packages are filtered based on services. After selecting a package, employees get access to all the services under the package.'
      },
      {
        id: 'app-access',
        question: 'How do employees access and use the app?',
        answer: `We provide your company with a dashboard. You can provide employees the access code through the admin dashboard.

The user receives an email and sms with the activation code. The user then creates an account with the code in our app. After Viewing the list of services and selecting a package the user can simply visit any partner center and scan the QR present at our partner center to avail the service.`
      },
      {
        id: 'user-friendly',
        question: 'Is the app user-friendly for all age groups?',
        answer: 'The app is designed for all age groups. Simply open the app and scan the qr present at the center. This 2 step check in process makes it easy for all age groups to navigate for functionality'
      },
      {
        id: 'customer-support',
        question: 'What kind of customer support do you provide for employees and companies?',
        answer: `We provide a point of contact to your company who will be dedicated to supporting your company at all times for this initiative. Our customer support number is available 24x7 and Employees can call out customer support at any time to clear out queries or if they are facing any challenges.

We will be providing a monthly counseling session to deal with any challenges or plan strategy to engage the team better.`
      }
    ]
  },
  {
    id: 'onboarding',
    title: '🎯 Collaboration and Onboarding',
    questions: [
      {
        id: 'onboarding-process',
        question: 'How does onboarding work for companies?',
        answer: 'Our onboarding team will give you admin access to your organization account on Meltdown App. Your point of contact can easily add/remove employees in the system and send activation code to your employees. The onboarding team will support you in case of any assistance required.'
      },
      {
        id: 'implementation-speed',
        question: 'How quickly can we implement Meltdown in our organization?',
        answer: 'Meltdown has created an innovative solution with a simple process. The implementation in terms of creating system access and onboarding your team in the platform can be done in less than a day once the company ties up.'
      },
      {
        id: 'onboarding-support',
        question: 'What support does Meltdown provide during and after onboarding?',
        answer: "Meltdown will guide you to set up the admin system and other technical assistance required during onboarding employees. We'll also walk you through how to see the dashboard, and activity and engagement of your employees in the system."
      }
    ]
  },
  {
    id: 'metrics',
    title: '📈 Impact and Metrics',
    questions: [
      {
        id: 'measure-engagement',
        question: 'How do we measure employee engagement and ROI?',
        answer: `Meltdown provides reports of employee engagement and ROI through key metrics and features that showcase participation, preferences, and impact:

Employee Participation
• Signed-Up Employees: Total number of employees registered on the platform
• Subscribers: Employees actively subscribed and engaging with Meltdown's services

Activity Metrics
• Total Check-ins: Number of gym or wellness center visits made by employees
• Favorite Partner Centers: Insights into the most preferred wellness locations by employees
• Step Counts: Individual step counts for each employee, both for subscribers and non-subscribers, to inspire daily movement and promote physical activity

Cost Savings and Trends
• Detailed breakdown of Cost Savings for employees and the company through Meltdown's solutions
• Trend of Investment per Employee: Monthly trend analysis showing the company's investment in employee wellness programs over time

Gamified Engagement
• Leaderboard: A gamified feature tracking employee activity, including step counts and check-ins, to foster healthy competition and drive engagement

These detailed reports provide organizations with a holistic view of their employees' wellness journeys and the ROI of their wellbeing programs.`
      },
      {
        id: 'reports-frequency',
        question: 'What kind of reports do you provide, and how often?',
        answer: `Meltdown provides monthly or quarterly reports with:
• Engagement and Investment Metrics: Employee participation, check-ins, step counts, cost savings, and investment trends
• Employee Feedback: Reviews on the wellbeing benefits and areas for improvement
• Program Highlights: Key achievements, participation milestones, and onsite visit summaries
• Actionable Recommendations: Steps to collaborate with HR and grow an active workforce

Clear, concise, and actionable insights to enhance your wellbeing program.`
      },
      {
        id: 'track-specific-metrics',
        question: 'Can we track specific metrics like participation rates or activity preferences?',
        answer: `Yes, Meltdown tracks specific metrics to provide valuable insights, including:
• Participation Rates: Number of signed-up employees, active users, and subscribers
• Activity Preferences: Popular wellness activities and most-visited partner centers
• Engagement Trends: Total check-ins, step counts, and percentage of employees using multiple gyms

These metrics help you understand employee engagement and tailor wellbeing programs effectively.`
      }
    ]
  },
  {
    id: 'value',
    title: '💡 Value Proposition',
    questions: [
      {
        id: 'why-choose-meltdown',
        question: 'Why should our company choose Meltdown?',
        answer: 'Meltdown is designed to get your team to start living an active lifestyle and create a community within your company for wellness. Our retention rates show the effectiveness of building a community for your company. We provide measurable and impactful data that helps us understand the team and cater services accordingly. Wellness is different for all and at Meltdown we have something for everyone.'
      },
      {
        id: 'employee-benefits',
        question: 'How will this program benefit our employees?',
        answer: 'The program offers accessibility, variety, affordability and community. Employees can now go anywhere,anyday and try any service to find what they like. Through tracking of their daily activity and rewards through gamification, employees now feel the sense of achievement and recognition for leading an active lifestyle. The system is designed to connect people and bring your team closer by doing activities together after work hours.'
      },
      {
        id: 'improve-morale-productivity',
        question: 'How does this improve employee morale and productivity?',
        answer: `Improved employee morale and productivity stem from creating a workplace culture that prioritizes health and well-being. Here's how Meltdown contributes:

Enhanced Physical Health: Regular physical activity reduces fatigue, improves energy levels, and boosts overall well-being, enabling employees to perform better at work.

Stress Reduction: Access to mental wellness resources and physical activities like yoga, swimming, or group classes helps employees manage stress more effectively, leading to better focus and decision-making.

Community Building: Meltdown fosters an active community within the workplace, normalizing movement and creating opportunities for employees to bond over shared goals and challenges. This strengthens workplace relationships and enhances teamwork.

Recognition and Rewards: Gamified challenges and recognition for active participation motivate employees to stay engaged and foster a sense of accomplishment, which translates into a positive attitude toward work.

Work-Life Balance: By encouraging healthier habits, Meltdown helps employees achieve better work-life balance, making them happier and more satisfied both professionally and personally.

Increased Engagement: Healthy, active employees tend to be more engaged, take fewer sick days, and demonstrate higher levels of commitment to their roles and the organization.

When employees feel supported in their health journey, it creates a ripple effect of positivity, ultimately driving productivity and workplace satisfaction.`
      }
    ]
  },
  {
    id: 'customization',
    title: '🔧 Customization and Flexibility',
    questions: [
      {
        id: 'customize-program',
        question: 'Can we customize the program for our company\'s unique needs?',
        answer: 'Yes. Companies can customize the amount employees see on the app. They can choose to subsidize the amount further. We also customize our wellness workshops depending on the need and requirement of your company'
      },
      {
        id: 'suggest-activities',
        question: 'Can employees suggest new activities or services?',
        answer: 'Yes. We encourage companies to take in feedback and personal requirements of their employees. Based on the feedback we add new services that might be near their homes or preferences.'
      },
      {
        id: 'expand-reduce-package',
        question: 'What happens if we want to expand or reduce our package?',
        answer: 'Option to expand or reduce the package is available. In case of expansion, the additional charges will be billed from the new month. In case of reducing, we can extend the duration of the reduced package with the amount remaining.'
      }
    ]
  },
  {
    id: 'challenges',
    title: '🛡️ Challenges and Concerns',
    questions: [
      {
        id: 'employees-dont-use',
        question: 'What if employees don\'t use the program?',
        answer: 'Engaging employees into the program is a team effort. With your team providing us with feedback and initiations, the app is designed to have a ripple effect. Initially few employees will try it and based on their experience we are confident that their team members will slowly join because of our gamification that fosters comradery. But incase employees do not use the program, we will provide your company with a refund.'
      },
      {
        id: 'data-privacy',
        question: 'How do you ensure data privacy and security on the app?',
        answer: 'We have a team dedicated to data security and encryption in place'
      },
      {
        id: 'track-record',
        question: 'What\'s your track record or success rate with other companies?',
        answer: 'We are currently working with 13 companies in the field of IT, Education, Hospitality and FMCG.'
      },
      {
        id: 'not-satisfied',
        question: 'What if we\'re not satisfied with the program?',
        answer: 'Companies can choose to end the program at any time. In this case, employees who have active ongoing subscription will be able to continue using our services until their subscription expires after which they will not be able to purchase a new subscription.'
      }
    ]
  },
  {
    id: 'mission',
    title: '🌟 Mission and Vision',
    questions: [
      {
        id: 'meltdown-mission',
        question: 'What is Meltdown\'s mission?',
        answer: 'To create innovative solutions that empower people to lead an active lifestyle and connect through wellness'
      },
      {
        id: 'long-term-vision',
        question: 'What is your long-term vision for Meltdown?',
        answer: 'A world where everyone engages in and connects through wellness'
      }
    ]
  }
];
