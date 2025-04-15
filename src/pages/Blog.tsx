
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog posts data
  const featuredPost = {
    title: "The ROI of Corporate Wellness: A Case Study",
    excerpt: "Explore how implementing a comprehensive wellness program led to a 32% reduction in sick days and 24% improvement in employee retention for a Fortune 500 company.",
    author: "Dr. Jessica Chen",
    date: "April 10, 2025",
    category: "Corporate Wellness",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    readTime: "7 min read"
  };

  const recentPosts = [
    {
      id: 1,
      title: "5 Science-Backed Ways to Boost Energy Without Caffeine",
      excerpt: "Discover research-supported methods to increase your energy levels naturally without relying on caffeine or other stimulants.",
      author: "Sarah Rodriguez, RD",
      date: "April 8, 2025",
      category: "Health & Nutrition",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mindfulness Practices for High-Stress Workplaces",
      excerpt: "Learn practical mindfulness techniques that can be implemented in fast-paced, high-pressure work environments.",
      author: "Marcus Johnson, MS",
      date: "April 5, 2025",
      category: "Mental Wellness",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Creating an Inclusive Wellness Program",
      excerpt: "Strategies for designing wellness initiatives that address the diverse needs and preferences of all employees.",
      author: "Alicia Thompson",
      date: "April 3, 2025",
      category: "Corporate Wellness",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      readTime: "8 min read"
    }
  ];

  const popularPosts = [
    {
      id: 4,
      title: "The Business Case for Employee Wellness Programs",
      author: "Jonathan Lee",
      date: "March 28, 2025",
      category: "Corporate Wellness"
    },
    {
      id: 5,
      title: "How to Measure Wellness Program Success",
      author: "Dr. Jessica Chen",
      date: "March 25, 2025",
      category: "Corporate Wellness"
    },
    {
      id: 6,
      title: "Designing Effective Wellness Challenges",
      author: "Michael Williams",
      date: "March 22, 2025",
      category: "Engagement Strategies"
    },
    {
      id: 7,
      title: "The Link Between Physical Activity and Productivity",
      author: "Sophia Patel",
      date: "March 20, 2025",
      category: "Physical Wellness"
    },
    {
      id: 8,
      title: "Nutrition Fundamentals for Workplace Performance",
      author: "Sarah Rodriguez, RD",
      date: "March 18, 2025",
      category: "Health & Nutrition"
    }
  ];

  // Blog categories
  const categories = [
    { name: "Corporate Wellness", count: 24 },
    { name: "Mental Wellness", count: 18 },
    { name: "Physical Wellness", count: 15 },
    { name: "Health & Nutrition", count: 12 },
    { name: "Engagement Strategies", count: 9 },
    { name: "Case Studies", count: 7 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wellness Insights Blog
            </h1>
            <p className="text-lg mb-8">
              Expert articles, case studies, and resources to help you create healthier, happier workplaces.
            </p>
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gray-100 overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-3">
                  <span className="bg-primary/10 text-black text-sm px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-3">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gray-200 w-8 h-8 rounded-full mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">{featuredPost.author}</p>
                      <p className="text-xs text-gray-500">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Link to="/blog" className="text-secondary font-bold hover:underline">
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts and Sidebar */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Recent Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="h-48 md:h-auto bg-gray-100 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <div className="flex items-center mb-2">
                          <span className="bg-primary/10 text-black text-xs px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-xs ml-2">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-700 mb-4 text-sm">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-gray-200 w-6 h-6 rounded-full mr-2"></div>
                            <div>
                              <p className="text-xs font-medium">{post.author}</p>
                              <p className="text-xs text-gray-500">{post.date}</p>
                            </div>
                          </div>
                          <Link to="/blog" className="text-secondary text-sm font-bold hover:underline">
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="inline-flex items-center">
                  <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-primary/10 text-black font-medium">
                    1
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to="/blog" className="flex justify-between items-center py-2 border-b border-gray-100 hover:text-secondary">
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <Link to="/blog" className="block hover:text-secondary">
                        <h4 className="font-bold mb-1">{post.title}</h4>
                        <div className="flex text-xs text-gray-500 space-x-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.category}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-primary/10 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-sm mb-4">
                  Get the latest wellness insights and strategies delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="w-full btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Explore our wellness solutions or contact our team to discuss how Meltdown can help your organization thrive.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/corporate-wellness" className="btn-primary">Explore Our Solutions</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
