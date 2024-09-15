// Carousal.jsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from '../Assets/4Feb-Vish.jpg';
import image2 from '../Assets/4Feb2.jpg';
import image3 from '../Assets/4Feb5.jpg';
import image4 from '../Assets/NSS.jpg';

const images = [image1, image2, image3, image4];

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 90%;
  margin: auto;
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease;
  transform: ${({ scrollX }) => `translateX(-${scrollX}px)`};
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 20rem;
  height: 16rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export default function Carousal() {
  const [scrollX, setScrollX] = useState(0);
  const imageWidth = 400; // Width of each image container

  // Automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX(prev => {
        const nextScroll = prev + imageWidth;
        return nextScroll >= (images.length - 3) * imageWidth ? 0 : nextScroll;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      <ImageWrapper scrollX={scrollX}>
        {images.map((img, index) => (
          <div key={index}>
            <Image src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </ImageWrapper>
    </CarouselContainer>
  );
}
