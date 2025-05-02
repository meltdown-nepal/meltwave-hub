
import React from 'react';

const Blog = () => {
  return (
    <div className="container-custom mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-header mb-4">Meltdown Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest wellness trends, corporate wellness insights, and company news.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Placeholder for blog posts - to be populated with actual content later */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Blog thumbnail placeholder
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">May {item}, 2025</p>
              <h3 className="text-xl font-bold font-header mb-2">Blog Post Title {item}</h3>
              <p className="text-gray-600 mb-4">
                This is a brief excerpt or summary of the blog post content...
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">More articles coming soon!</p>
        <p>
          <a href="/contact" className="btn-secondary">
            Subscribe to our newsletter
          </a>
        </p>
      </div>
    </div>
  );
};

export default Blog;
