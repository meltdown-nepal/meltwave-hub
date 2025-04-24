import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const clientLogos = [{
  id: 1,
  src: "/lovable-uploads/Veda.png",
  alt: "Client Logo 1"
}, {
  id: 2,
  src: "/lovable-uploads/Karobar.png",
  alt: "Client Logo 2"
}, {
  id: 3,
  src: "/lovable-uploads/naamche.png",
  alt: "Client Logo 3"
}, {
  id: 4,
  src: "/lovable-uploads/SecurityPal.png",
  alt: "Client Logo 4"
}, {
  id: 5,
  src: "/lovable-uploads/HimalayanJava.png",
  alt: "Client Logo 5"
}, {
  id: 6,
  src: "/lovable-uploads/flextecs.png",
  alt: "Client Logo 6"
}, {
  id: 7,
  src: "/lovable-uploads/GolchhaGroup.png",
  alt: "Client Logo 7"
}, {
  id: 8,
  src: "/lovable-uploads/YoungInnovations.png",
  alt: "Client Logo 8"
}, {
  id: 9,
  src: "/lovable-uploads/leapfrog.png",
  alt: "Client Logo 9"
}, {
  id: 10,
  src: "/lovable-uploads/shanker.png",
  alt: "Client Logo 10"
}, {
  id: 11,
  src: "/lovable-uploads/KingsCollege.png",
  alt: "Client Logo 10"
}, {
  id: 12,
  src: "/lovable-uploads/ottr.png",
  alt: "Client Logo 10"
}, {
  id: 13,
  src: "/lovable-uploads/CodingMountain.png",
  alt: "Client Logo 10"
}, {
  id: 14,
  src: "/lovable-uploads/JagadambaMotors.png",
  alt: "Client Logo 10"
}, {
  id: 15,
  src: "/lovable-uploads/OwlDigital.png",
  alt: "Client Logo 10"
}, {
  id: 16,
  src: "/lovable-uploads/KavyaSports.png",
  alt: "Client Logo 10"
}, {
  id: 17,
  src: "/lovable-uploads/Stalwart.png",
  alt: "Client Logo 10"
}, {
  id: 18,
  src: "/lovable-uploads/WeBajraStudio.png",
  alt: "Client Logo 10"
}, {
  id: 19,
  src: "/lovable-uploads/NepaliGharHotel.png",
  alt: "Client Logo 10"
}, {
  id: 20,
  src: "/lovable-uploads/UBASolutions.png",
  alt: "Client Logo 10"
}, {
  id: 21,
  src: "/lovable-uploads/snackon.png",
  alt: "Client Logo 10"
}];
const Contact = () => {
  return <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg mb-8">
            Have questions about our wellness solutions? Want to learn more about how Meltdown can benefit your company, employees, or wellness practice? We're here to help.
          </p>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="mb-8">
              Fill out the form below and a member of our team will get back to you within 24 hours. Or you can contact us directly using the information provided.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your email address" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your phone number" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company/Organization (Optional)</label>
                <input type="text" id="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your company or organization" />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-1">I'm interested in:</label>
                <select id="interest" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                  <option value="">Please select an option</option>
                  <option value="corporate">Corporate Wellness Solutions</option>
                  <option value="provider">Becoming a Wellness Provider</option>
                  <option value="employee">Employee Wellness Programs</option>
                  <option value="academy">Academy for Trainers</option>
                  <option value="meltfit">MeltFit Training Programs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Please provide any additional information about your inquiry"></textarea>
              </div>

              <div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-mail mr-3 text-primary flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <div>
                    <p className="font-bold">Email</p>
                    <a href="mailto:support@meltdownnepal.com" className="text-gray-600 hover:text-secondary">support@meltdownnepal.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-phone mr-3 text-primary flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <div>
                    <p className="font-bold">Phone</p>
                    <a href="tel:+1-800-555-0123" className="text-gray-600 hover:text-secondary">+977 9820115144</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-map-pin mr-3 text-primary flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <div>
                    <p className="font-bold">Address</p>
                    <address className="text-gray-600 not-italic">
                      Banasthali, Kathmandu, Nepal<br />
                      Postal Code: 44600
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Companies Grid */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Partner Companies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {clientLogos.slice(0, 12).map((logo, index) => <div key={`${logo.id}-${index}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src={logo.src} alt={logo.alt} className="h-12 w-full object-contain" draggable={false} />
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Quick Links */}
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/corporate-wellness" className="bg-white hover:bg-primary/5 transition-colors p-6 rounded-lg shadow-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-building mx-auto mb-4"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
            <h3 className="text-xl font-bold mb-2">Corporate Wellness</h3>
            <p className="text-gray-600">Explore our comprehensive wellness solutions for businesses.</p>
          </Link>

          <Link to="/providers" className="bg-white hover:bg-primary/5 transition-colors p-6 rounded-lg shadow-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-heart-handshake mx-auto mb-4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
            <h3 className="text-xl font-bold mb-2">For Providers</h3>
            <p className="text-gray-600">Join our network of wellness professionals.</p>
          </Link>

          <Link to="/academy" className="bg-white hover:bg-primary/5 transition-colors p-6 rounded-lg shadow-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-graduation-cap mx-auto mb-4"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
            <h3 className="text-xl font-bold mb-2">Academy</h3>
            <p className="text-gray-600">Learn about our certification programs for wellness trainers.</p>
          </Link>

          <Link to="/meltfit" className="bg-white hover:bg-primary/5 transition-colors p-6 rounded-lg shadow-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-dumbbell mx-auto mb-4"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>
            <h3 className="text-xl font-bold mb-2">MeltFit</h3>
            <p className="text-gray-600">Discover our specialized fitness programs for professionals.</p>
          </Link>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Find quick answers to common questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 py-2 bg-white shadow-md">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                How quickly can you implement a wellness program?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Most corporate wellness programs can be implemented within 2-4 weeks from initial consultation, depending on the program's complexity and company size.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 py-2 bg-white shadow-md">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                What is the cost of your corporate wellness programs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Our program costs vary based on company size, program components, and implementation approach. We offer customized solutions to fit various budgets, with options starting at $5,000 per quarter. Contact us for a personalized quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 py-2 bg-white shadow-md">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                How do I qualify as a wellness provider?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We look for providers with appropriate certifications, insurance, and experience in their area of expertise. Apply through our "For Providers" page, and our team will contact you to discuss the next steps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 py-2 bg-white shadow-md">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                Do you offer remote wellness programs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes, we offer fully remote, hybrid, and in-person wellness programs to accommodate various work arrangements and company preferences.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>

    {/* Newsletter Section */}
    <section className="bg-primary/20 section-padding">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Subscribe to our newsletter for the latest wellness insights, news, and exclusive content.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-full border border-gray-300 flex-grow" />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  </div>;
};
export default Contact;