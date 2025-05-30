
import { Building2, Users, HandHeart, Dumbbell, Play, Shield, Clock, CreditCard, Settings, HelpCircle, Zap, Target, Globe, CheckCircle, Phone } from 'lucide-react';

export const faqData = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    questions: [
      {
        id: 'what-is-meltdown',
        question: 'What is Meltdown?',
        answer: 'Meltdown is a comprehensive corporate wellness platform that connects companies with top wellness providers to create tailored programs for employees. We help businesses implement effective wellness programs that boost productivity, reduce turnover, and create a positive workplace culture.',
        icon: Building2
      },
      {
        id: 'how-to-get-started',
        question: 'How do I get started with Meltdown?',
        answer: 'Getting started is easy! Simply contact us through the form on our website, and one of our wellness consultants will reach out to discuss your specific needs and guide you through the onboarding process. Whether you\'re a company, employee, or provider, we\'ll help you find the perfect solution.',
        icon: Play
      },
      {
        id: 'who-can-use',
        question: 'Who can use Meltdown?',
        answer: 'Meltdown is designed for three main user groups: companies looking to implement wellness programs, employees seeking access to wellness services, and wellness providers wanting to expand their reach to corporate clients.',
        icon: Users
      }
    ]
  },
  {
    id: 'for-companies',
    title: 'For Companies',
    questions: [
      {
        id: 'company-benefits',
        question: 'How does Meltdown benefit companies?',
        answer: 'Meltdown helps companies implement effective wellness programs that boost productivity, reduce turnover, and create a positive workplace culture. Our comprehensive platform connects businesses with top wellness providers to create tailored programs for employees.',
        icon: Target
      },
      {
        id: 'implementation-time',
        question: 'How long does it take to implement a wellness program?',
        answer: 'Implementation typically takes 2-4 weeks depending on your company size and specific requirements. Our team works closely with you to ensure a smooth rollout and proper employee onboarding.',
        icon: Clock
      },
      {
        id: 'pricing-structure',
        question: 'What is your pricing structure?',
        answer: 'Our pricing is flexible and scales with your company size and selected services. We offer transparent monthly or annual subscription plans with no hidden fees. Contact us for a personalized quote based on your specific needs.',
        icon: CreditCard
      },
      {
        id: 'customization',
        question: 'Can programs be customized for our company?',
        answer: 'Absolutely! We work with you to understand your company culture, employee needs, and wellness goals to create a fully customized program. From program selection to branding, everything can be tailored to your organization.',
        icon: Settings
      }
    ]
  },
  {
    id: 'for-employees',
    title: 'For Employees',
    questions: [
      {
        id: 'employee-services',
        question: 'What services do you offer for employees?',
        answer: 'Employees gain access to high-quality wellness programs including fitness classes, nutrition coaching, mindfulness sessions, and mental health resources. Our platform makes it easy to participate and track progress, helping you stay healthy, reduce stress, and improve work-life balance.',
        icon: Dumbbell
      },
      {
        id: 'access-programs',
        question: 'How do employees access wellness programs?',
        answer: 'Once your company is set up with Meltdown, employees receive login credentials to access our user-friendly platform. From there, they can browse available programs, book sessions, and track their wellness journey.',
        icon: Globe
      },
      {
        id: 'program-tracking',
        question: 'Can employees track their progress?',
        answer: 'Yes! Our platform includes comprehensive tracking features that allow employees to monitor their wellness goals, view participation history, and see their progress over time. This helps maintain motivation and accountability.',
        icon: CheckCircle
      }
    ]
  },
  {
    id: 'for-providers',
    title: 'For Wellness Providers',
    questions: [
      {
        id: 'provider-partnership',
        question: 'How can wellness providers partner with Meltdown?',
        answer: 'Wellness providers can join our platform to connect with companies seeking specific expertise and services. This helps you grow your business by accessing corporate clients you might not reach otherwise. Our platform handles scheduling, payments, and client management, letting you focus on delivering exceptional services.',
        icon: HandHeart
      },
      {
        id: 'provider-requirements',
        question: 'What are the requirements to become a provider?',
        answer: 'We look for certified wellness professionals with relevant qualifications and experience. Providers must meet our quality standards, have appropriate insurance, and be committed to delivering excellent service to corporate clients.',
        icon: Shield
      },
      {
        id: 'provider-payments',
        question: 'How do providers get paid?',
        answer: 'Providers receive payments directly through our platform on a regular schedule. We handle all payment processing, invoicing, and client billing, making it easy for you to focus on your services while ensuring timely compensation.',
        icon: CreditCard
      }
    ]
  },
  {
    id: 'programs-services',
    title: 'Programs & Services',
    questions: [
      {
        id: 'meltfit-programs',
        question: 'What makes MeltFit training programs different?',
        answer: 'MeltFit training programs are designed by industry experts and personalized to individual needs and goals. Our programs combine physical fitness, nutrition guidance, and mental wellbeing approaches for comprehensive wellness that fits into busy schedules.',
        icon: Zap
      },
      {
        id: 'program-types',
        question: 'What types of wellness programs are available?',
        answer: 'We offer a wide range of programs including fitness classes, yoga sessions, meditation workshops, nutrition counseling, mental health support, stress management, team building activities, and specialized corporate wellness challenges.',
        icon: Target
      },
      {
        id: 'virtual-programs',
        question: 'Are virtual programs available?',
        answer: 'Yes! We offer both in-person and virtual wellness programs to accommodate different work environments and preferences. Virtual programs are perfect for remote teams or companies with multiple locations.',
        icon: Globe
      }
    ]
  },
  {
    id: 'support-contact',
    title: 'Support & Contact',
    questions: [
      {
        id: 'customer-support',
        question: 'What kind of customer support do you provide?',
        answer: 'We provide comprehensive customer support including onboarding assistance, technical support, program guidance, and ongoing account management. Our team is available via email, phone, and chat during business hours.',
        icon: Phone
      },
      {
        id: 'technical-issues',
        question: 'What if I experience technical issues?',
        answer: 'Our technical support team is ready to help with any platform issues. You can reach out through our support portal, email, or phone. We also provide training resources and FAQ sections to help resolve common issues quickly.',
        icon: Settings
      },
      {
        id: 'additional-questions',
        question: 'What if I have additional questions?',
        answer: 'If you can\'t find the answer you\'re looking for in our FAQ, don\'t hesitate to contact our team directly. We\'re here to help and happy to provide personalized assistance for any questions about our platform or services.',
        icon: HelpCircle
      }
    ]
  }
];
