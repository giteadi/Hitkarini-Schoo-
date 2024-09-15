import React from 'react';

const ContactUs = () => {
  return (
    <div>
     
      <section className="py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
