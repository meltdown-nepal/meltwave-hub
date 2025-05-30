
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Event {
  id: string;
  title: string;
  date: Date;
  address?: string;
  description?: string;
  note?: string;
  registrationLink?: string;
  isExternalLink?: boolean;
  image?: string;
  status: 'past' | 'current' | 'upcoming';
}

const EventTimeline = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  // Sample events data - in a real app, this would come from an API
  const allEvents: Omit<Event, 'status'>[] = [
    {
      id: '1',
      title: 'Java Fun Marathon',
      date: new Date('2025-05-30T09:00:00'),
      description: 'A thrilling 7km run with unique fitness challenges at each Himalayan Java stop! Enjoy coffee, community, and exercise all in one event.',
      registrationLink: '#',
      image: '/lovable-uploads/c7877f89-f497-4cf4-8cb7-63d1104518c3.png'
    },
    {
      id: '2',
      title: 'Weekly Wednesday Run',
      date: new Date('2025-06-04T09:00:00'),
      address: 'Narayanchaur',
      description: 'Join us to achieve a milestone of running 40,000 km in a year (Running around the world)',
      note: 'This event repeats every Wednesday.',
      registrationLink: '/contact?event=weekly-run',
      image: '/lovable-uploads/761279cd-bc8e-49ce-897a-1b52b2f6e467.png'
    },
    {
      id: '3',
      title: 'Community Bootcamp',
      date: new Date('2025-06-07T07:00:00'),
      address: 'Central Park',
      description: 'High-intensity outdoor workout session for all fitness levels.',
      registrationLink: '#',
      image: '/lovable-uploads/a57234a5-bf11-4976-b2b0-beb02e66466d.png'
    },
    {
      id: '4',
      title: 'Yoga & Mindfulness Session',
      date: new Date('2025-06-10T18:00:00'),
      address: 'Wellness Center',
      description: 'Relaxing yoga session followed by meditation and mindfulness practices.',
      registrationLink: '#'
    },
    {
      id: '5',
      title: 'Corporate Team Challenge',
      date: new Date('2025-06-15T14:00:00'),
      address: 'Sports Complex',
      description: 'Team-building activities and fitness challenges for corporate groups.',
      registrationLink: '#'
    }
  ];

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Process events and categorize them
  useEffect(() => {
    const now = currentTime.getTime();
    const processedEvents = allEvents.map(event => {
      const eventTime = event.date.getTime();
      const timeDiff = eventTime - now;
      
      let status: 'past' | 'current' | 'upcoming';
      if (timeDiff < -3600000) { // Past (more than 1 hour ago)
        status = 'past';
      } else if (timeDiff < 3600000) { // Current (within 1 hour)
        status = 'current';
      } else {
        status = 'upcoming';
      }
      
      return { ...event, status };
    });

    // Sort events by date
    processedEvents.sort((a, b) => a.date.getTime() - b.date.getTime());

    // Separate past and current/upcoming events
    const past = processedEvents.filter(event => event.status === 'past');
    const currentAndUpcoming = processedEvents.filter(event => event.status !== 'past');

    setPastEvents(past);
    setEvents(currentAndUpcoming.slice(0, 3)); // Show only next 3 events
  }, [currentTime]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getTimeUntilEvent = (date: Date) => {
    const diff = date.getTime() - currentTime.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h`;
    return 'Starting soon';
  };

  return (
    <section id="upcoming" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Event Timeline</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Stay updated with our latest community wellness events and activities.
          </p>
        </div>

        {/* Main Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary/50 hidden md:block"></div>
          
          {/* Events */}
          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`relative transform transition-all duration-700 ease-in-out ${
                  event.status === 'current' ? 'scale-105' : 'scale-100'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:block">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                    event.status === 'current' 
                      ? 'bg-primary animate-pulse' 
                      : 'bg-secondary'
                  }`}></div>
                </div>

                {/* Event Card */}
                <div className={`${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
                } ${
                  event.status === 'current' 
                    ? 'md:pr-8 md:pl-8' 
                    : index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <div className={`rounded-xl shadow-lg p-6 border-2 transition-all duration-500 ${
                    event.status === 'current'
                      ? 'border-primary bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl'
                      : 'border-gray-200 bg-white hover:shadow-xl hover:border-secondary/50'
                  }`}>
                    
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === 'current'
                          ? 'bg-primary text-black'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {event.status === 'current' ? 'Happening Now' : 'Upcoming'}
                      </span>
                      
                      {event.status === 'upcoming' && (
                        <span className="text-xs text-secondary font-medium">
                          {getTimeUntilEvent(event.date)}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">{event.title}</h3>
                    
                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {formatTime(event.date)}
                      </div>
                      {event.address && (
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {event.address}
                        </div>
                      )}
                    </div>

                    {event.description && (
                      <p className="text-gray-700 mb-4">{event.description}</p>
                    )}
                    
                    {event.note && (
                      <p className="text-xs italic text-gray-500 mb-4">{event.note}</p>
                    )}

                    {event.registrationLink && (
                      <div className="flex justify-start">
                        {event.isExternalLink ? (
                          <Button 
                            variant="default" 
                            className={`font-semibold transition-all duration-300 ${
                              event.status === 'current'
                                ? 'bg-primary hover:bg-primary/90 text-black shadow-lg'
                                : 'bg-secondary hover:bg-primary text-black'
                            }`}
                          >
                            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                              Register Now
                            </a>
                          </Button>
                        ) : (
                          <Button 
                            variant="default" 
                            className={`font-semibold transition-all duration-300 ${
                              event.status === 'current'
                                ? 'bg-primary hover:bg-primary/90 text-black shadow-lg'
                                : 'bg-secondary hover:bg-primary text-black'
                            }`}
                            asChild
                          >
                            <Link to={event.registrationLink}>Register Now</Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Gallery */}
        {pastEvents.length > 0 && (
          <div className="border-t-2 border-gray-200 pt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Past Events Gallery</h3>
              <p className="text-gray-600">Highlights from our recent community activities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.slice(-6).map((event, index) => (
                <div 
                  key={event.id}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {event.image ? (
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-lg mb-1">{event.title}</h4>
                    <p className="text-sm opacity-90">{formatDate(event.date)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary text-lg px-8 py-3">
            Request Custom Event for Your Company
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
