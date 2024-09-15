import React from 'react';


const Blogs = () => {
  return (
    <div>
    
      <section className="py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Blogs</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Blog Post */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Blog Title 1</h2>
            <p className="text-gray-700">This is a short description of the blog post content. Read more to dive into the article...</p>
            <a href="/blogs/1" className="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
          </div>
          {/* Repeat for more blogs */}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
