import React from 'react';
import schoolImage from '../Assets/School.jpg';
import Deep from '../Assets/Deep.jpg';
import Nss from '../Assets/NSS.jpg';
import lastCardImage from '../Assets/4Feb-Vish.jpg';
import sports from '../Assets/Sports.jpg';
import principal from '../Assets/principal_mam.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const HomePage = () => {
  const text = "Educating girls since 1938, empowering women for a brighter future.";

  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white p-8 md:p-16 h-96" style={{ backgroundImage: `url(${schoolImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Hitkarini Girls School
          </h1>
          <div className="text-2xl font-bold animate-heartbeat">
            {text.split(' ').map((word, index) => (
              <span key={index} className="mr-2">
                {word}{" "}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Motive */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Our Motive
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
            <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden border-4 border-transparent ring-4 ring-green-400 ring-opacity-50 transition-transform transform hover:scale-105 hover:ring-blue-400 hover:ring-opacity-70">
              <img src={Deep} alt="Empowerment" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Empowerment
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mission is to empower young girls through quality education and holistic development.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden border-4 border-transparent ring-4 ring-blue-400 ring-opacity-50 transition-transform transform hover:scale-105 hover:ring-green-400 hover:ring-opacity-70">
              <img src={Nss} alt="Excellence" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Excellence
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We strive for excellence in academics and character-building to prepare our students for a brighter future.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden border-4 border-transparent ring-4 ring-yellow-400 ring-opacity-50 transition-transform transform hover:scale-105 hover:ring-red-400 hover:ring-opacity-70">
              <img src={lastCardImage} alt="Community" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Community
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Building a strong community through collaboration and support to foster growth and learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white text-gray-700">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Our History
          </h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src={principal} alt='Principal Image' className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"/>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 text-lg leading-relaxed space-y-4">
              <p>
                Hitkarini Girls School, originally established in 1938, began its journey as a boys' school in Dixitpura, Jabalpur. The founding of this institution was driven by a vision to provide quality education to the youth of the region. However, as the need for female education became increasingly apparent, the school underwent a significant transformation in 1942, evolving into a girls' school. This pivotal change was inspired by the growing recognition of the importance of educating girls and providing them with equal opportunities for learning and personal development.
              </p>
              <Link to='/about'>
                <span className='text-blue-600 hover:text-blue-800'>Learn more..</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Student Results Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Student Results
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
            <motion.div 
              className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden border-4 border-transparent ring-4 ring-green-400 ring-opacity-50 transition-transform transform hover:scale-105 hover:ring-blue-400 hover:ring-opacity-70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  60% Excellence
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Achieved by 25% of our students, reflecting solid academic performance and dedication.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden border-4 border-transparent ring-4 ring-blue-400 ring-opacity-50 transition-transform transform hover:scale-105 hover:ring-green-400 hover:ring-opacity-70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  75% Excellence
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Achieved by 15% of our students, showcasing exceptional dedication and high academic standards.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden border-4 border-transparent ring-4 ring-yellow-400 ring-opacity-50 transition-transform transform hover:scale-105 hover:ring-red-400 hover:ring-opacity-70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  50% Excellence
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Achieved by 40% of our students, demonstrating good performance and commitment to their studies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
