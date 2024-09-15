import React from 'react';

const Blogs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Blogs</h1>

        <div className="flex justify-between gap-8 mb-8">
          <video 
            src="https://res.cloudinary.com/bazeercloud/video/upload/v1726383214/TestFolder/vdo2_xjke9i.mp4" 
            controls
            className="w-full max-w-[45%] rounded-lg shadow-lg"
          />
          <video 
            src="https://res.cloudinary.com/bazeercloud/video/upload/v1726384671/TestFolder/culture_hvnycc.mp4" 
            controls
            className="w-full max-w-[45%] rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Blogs;
