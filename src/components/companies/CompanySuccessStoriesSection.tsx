
import React from "react";
import { Card } from "@/components/ui/card";
import { Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const successStories = [
  {
    title: "Meltdown has brought a jolly spirit to our workplace, making every day feel more positive and energizing.",
    name: "Jyoti Pokharel",
    role: "HR Director, LeapFrog Technology",
    image: "/lovable-uploads/4c916132-a4fb-410d-bdec-5baf5f17287c.png", // REPLACED image
    linkTo: "https://www.instagram.com/p/DFP4tBFTzbC/",
  },
  {
    title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
    name: "Bibha Tandukar",
    role: "Project Manager, Young Innovation",
    image: "/lovable-uploads/8c61e61c-2c08-4a78-8212-aaef826700a5.png",
    linkTo: "https://www.instagram.com/p/DG-wZ4HIpLs/",
  },
  {
    title: "Meltdown's fresh approach to the fitness market and its diverse features have reignited my motivation.",
    name: "Pabin Karki",
    role: "CEO, Kaya Sports",
    image: "/lovable-uploads/f9bf14a9-e727-494e-80d5-a6dd6927a72d.png",
    linkTo: "https://www.instagram.com/p/DGa0GjtzQCn/",
  },
];

const placeholderImg = "/lovable-uploads/8a26d6be-3e65-4d47-9d5d-3fcaa609641a.png";

const CompanySuccessStoriesSection = () => {
  return (
    <section
      className="bg-gradient-to-br from-yellow-50 to-gray-50 py-20 px-4"
      id="testimonials"
    >
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-6 py-2 bg-amber-100 rounded-full text-amber-700 font-medium text-sm animate-fade-in">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in [--animation-delay:0.1s]">
            Hear From Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in [--animation-delay:0.14s]">
            See how companies have transformed their workplace wellness with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, idx) => (
            <Card
              key={idx}
              // Add overflow-visible to prevent clipping; add pt-10 for top space; pb-6 for bottom space
              className={cn(
                "relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full animate-fade-in overflow-visible pt-10 pb-6",
                idx === 1 ? "md:scale-105 md:-translate-y-2 z-10" : ""
              )}
              style={{
                animationDelay: `${0.05 * idx + 0.05}s`,
                animationDuration: "0.7s",
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-2" /* removed -mt-8 */>
                  <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-primary bg-gradient-to-br from-yellow-100 to-amber-200 shadow-lg">
                    <img
                      src={story.image || placeholderImg}
                      alt={story.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="px-8 pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-2">
                      <Quote className="h-7 w-7 text-amber-400 opacity-90" />
                    </div>
                    <p className="text-lg font-medium italic text-center mb-6 text-gray-800">
                      "{story.title}"
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col items-center mb-2">
                      <p className="font-bold text-md">{story.name}</p>
                      <p className="text-sm text-gray-500">{story.role}</p>
                    </div>
                    <div className="flex justify-center">
                      {story.linkTo && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 border-amber-300 bg-white hover:bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full transition-colors duration-200 mt-2"
                        >
                          <a
                            href={story.linkTo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Watch video testimonial from ${story.name}`}
                          >
                            <Play className="w-4 h-4" />
                            Watch Video
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Animation is now handled by Tailwind animate-fade-in utility; custom CSS no longer needed */}
    </section>
  );
};

export default CompanySuccessStoriesSection;
