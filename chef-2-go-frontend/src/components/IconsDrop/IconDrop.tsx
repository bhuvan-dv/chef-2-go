import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { AccessAlarm, ThreeDRotation, Delete } from '@mui/icons-material';


gsap.registerPlugin(MotionPathPlugin);

const IconDrop: React.FC = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const icons: SVGSVGElement[] = [];

  useEffect(() => {
    if (!iconContainerRef.current) return;

    for (let i = 0; i < 10; i++) {
      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('class', 'svg-icon');
      icon.innerHTML = '<circle cx="15" cy="15" r="15"></circle>'; // Replace with your SVG markup
      iconContainerRef.current.appendChild(icon);
      icons.push(icon);
    }

    const animateIcons = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      icons.forEach((icon, index) => {
        gsap.to(icon, {
          duration: 0.5,
          motionPath: {
            path: [
              { x: clientX + Math.random() * 20 - 10, y: clientY + Math.random() * 20 - 10 },
              { x: clientX, y: clientY },
            ],
            align: 'self',
            autoRotate: true,
          },
          ease: 'power2.out',
          stagger: 0.1 * index,
        });
      });
    };

    document.addEventListener('mousemove', animateIcons);

    return () => {
      document.removeEventListener('mousemove', animateIcons);
    };
  }, []);

  return (
    <div ref={iconContainerRef} className="icon-container">
      
    </div>
  );
};

export default IconDrop;
