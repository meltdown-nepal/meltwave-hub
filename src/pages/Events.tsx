
import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Corporate Wellness Summit",
      date: "June 15-16, 2025",
      location: "Virtual",
      description: "Join industry leaders for a two-day virtual summit discussing the latest trends and innovations in corporate wellness.",
      category: "Conference"
    },
    {
      id: 2,
      title: "Mindfulness at Work Workshop",
      date: "July 8, 2025",
      location: "New York City",
      description: "A hands-on workshop teaching practical mindfulness techniques that can be integrated into your daily work routine.",
      category: "Workshop"
    },
    {
      id: 3,
      title: "Ergonomics and Posture Masterclass",
      date: "July 22, 2025",
      location: "Virtual",
      description: "Learn how to set up your workspace for optimal health and productivity with our expert ergonomics specialist.",
      category: "Masterclass"
    },
    {
      id: 4,
      title: "Nutrition for High Performance",
      date: "August 5, 2025",
      location: "Chicago",
      description: "A comprehensive workshop on how nutrition affects workplace performance and practical steps to improve your diet.",
      category: "Workshop"
    },
    {
      id: 5,
      title: "Work-Life Balance Retreat",
      date: "September 18-20, 2025",
      location: "Denver",
      description: "A weekend retreat focused on creating sustainable work-life balance strategies for busy professionals.",
      category: "Retreat"
    },
    {
      id: 6,
      title: "Mental Health First Aid Certification",
      date: "October 12, 2025",
      location: "Virtual",
      description: "Become certified in Mental Health First Aid and learn how to support colleagues experiencing mental health challenges.",
      category: "Certification"
    }
  ];

  // Sample community initiatives
  const communityInitiatives = [
    {
      title: "Wellness Challenge",
      description: "Join our quarterly wellness challenges designed to build healthy habits and foster friendly competition among colleagues.",
      icon: "trophy"
    },
    {
      title: "Peer Support Network",
      description: "Connect with fellow wellness advocates and create a supportive community within your organization.",
      icon: "users"
    },
    {
      title: "Volunteer Programs",
      description: "Participate in community service initiatives that promote well-being beyond the workplace.",
      icon: "heart-handshake"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Events & Community
            </h1>
            <p className="text-lg mb-8">
              Connect, learn, and grow with like-minded wellness advocates through our events and community initiatives. Join us for workshops, webinars, and networking opportunities.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="#upcoming" className="btn-primary">View Upcoming Events</Link>
              <Link to="/contact" className="btn-outline">Request a Custom Event</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Join us for these upcoming events designed to enhance your wellness knowledge and connect you with industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary/10 p-3 text-center">
                  <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center mb-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-calendar mr-2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
                    {event.date}
                  </div>
                  <div className="flex items-center mb-4 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-map-pin mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {event.location}
                  </div>
                  <p className="mb-6 text-gray-700">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <Link to="/contact" className="text-secondary font-bold hover:underline">
                      Register Now
                    </Link>
                    <span className="text-gray-500 text-sm">Limited Seats</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">Request Custom Event for Your Company</Link>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Initiatives</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We believe in the power of community to enhance wellness. Join these ongoing initiatives to connect with others and strengthen your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {initiative.icon === "trophy" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                  )}
                  {initiative.icon === "users" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  )}
                  {initiative.icon === "heart-handshake" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                <p className="mb-6 text-gray-700">{initiative.description}</p>
                <Link to="/contact" className="text-secondary font-bold hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Gallery</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Take a peek at our past events and see the Meltdown community in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center text-gray-500">
              Event Photo
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center text-gray-500">
              Event Photo
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center text-gray-500">
              Event Photo
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center text-gray-500">
              Event Photo
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center text-gray-500">
              Event Photo
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center text-gray-500">
              Event Photo
            </div>
          </div>
        </div>
      </section>

      {/* Host an Event Section */}
      <section className="bg-primary/20 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Host a Custom Wellness Event</h2>
              <p className="text-lg mb-6">
                Looking to organize a wellness event for your company or organization? Meltdown offers customized event planning and facilitation services tailored to your specific needs and goals.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-3 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Wellness workshops and seminars</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-3 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Team-building wellness retreats</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-3 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Health and wellness fairs</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-3 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Wellness speaker series</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary">Request a Custom Event</Link>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Custom Wellness Event" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive updates on upcoming events, wellness tips, and community initiatives.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-full border border-gray-300 flex-grow"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
