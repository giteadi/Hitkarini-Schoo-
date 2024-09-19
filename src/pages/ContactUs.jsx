import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '' // Changed from number to phone
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    const { name, email, message, phone } = formData; // Changed from number to phone
    if (!name || !email || !message || !phone) {
      setError('All fields are required');
      return;
    }

    try {
      // Post form data to the API
      const response = await axios.post('http://localhost:4000/api/v1/form', formData);
      setSuccessMessage(response.data.message || 'Form submitted successfully');
      setError('');
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: '' // Reset phone field
      }); // Reset form
    } catch (err) {
      setError('An error occurred while submitting the form');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <section className="py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Phone</label> {/* Changed from Number to Phone */}
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="text"
                name="phone"
                value={formData.phone} // Changed from number to phone
                onChange={handleChange}
                placeholder="Your Phone Number"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
