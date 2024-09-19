import React from 'react';
import schoolImage from '../Assets/School.jpg';
import Deep from '../Assets/Deep.jpg';
import Nss from '../Assets/NSS.jpg';
import lastCardImage from '../Assets/4Feb-Vish.jpg';
import xyz from '../Assets/Sports.jpg'
import principal from '../Assets/principal_mam.jpg';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Carousal from '../components/Carousal';

// Keyframes for animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled-components for cards
const Card = styled.div`
  width: 100%;
  max-width: 100%;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  border: 4px solid transparent;
  transition: transform 0.3s, border-color 0.3s;
  animation: ${fadeInUp} 0.5s ease-out;

  &:hover {
    transform: scale(1.05);
    border-color: ${props => props.borderColor || 'transparent'};
  }

  img {
    width: 100%;
    height: 48%;
    object-fit: cover;
  }

  .content {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #4a4a4a;
  }
`;

const HomePage = () => {
  const text = "Educating girls since 1938, empowering women for a brighter future.";

  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white p-8 md:p-16 h-96" style={{ backgroundImage: `url(${schoolImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
          B.M.D HITKARINI GIRLS HR.SEC SCHOOL DIXITPURA
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
            <Card borderColor="ring-green-400">
              <img src={Deep} alt="Empowerment" />
              <div className="content">
                <h3>Empowerment</h3>
                <p>
                  Our mission is to empower young girls through quality education and holistic development.
                </p>
              </div>
            </Card>

            <Card borderColor="ring-blue-400">
              <img src={Nss} alt="Excellence" />
              <div className="content">
                <h3>Excellence</h3>
                <p>
                  We strive for excellence in academics and character-building to prepare our students for a brighter future.
                </p>
              </div>
            </Card>

            <Card borderColor="ring-yellow-400">
              <img src={lastCardImage} alt="Community" />
              <div className="content">
                <h3>Community</h3>
                <p>
                  Building a strong community through collaboration and support to foster growth and learning.
                </p>
              </div>
            </Card>
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
            <Card borderColor="ring-green-400">
              <div className="content">
                <h3>60% Excellence</h3>
                <p>
                  Achieved by 25% of our students, reflecting solid academic performance and dedication.
                </p>
              </div>
            </Card>

            <Card borderColor="ring-blue-400">
              <div className="content">
                <h3>75% Excellence</h3>
                <p>
                  Achieved by 15% of our students, showcasing exceptional dedication and high academic standards.
                </p>
              </div>
            </Card>

            <Card borderColor="ring-yellow-400">
              <div className="content">
                <h3>50% Excellence</h3>
                <p>
                  Achieved by 40% of our students, demonstrating good performance and commitment to their studies.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* carousal */}
      <section className='m-5'>
        <Carousal/>
      </section>
    </div>
  );
};

export default HomePage;
