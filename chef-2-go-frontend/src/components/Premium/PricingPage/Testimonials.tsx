
import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <div className="flex overflow-hidden space-x-4">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="testimonial-card move-right-to-left">
          <h2 className="text-lg font-bold mb-2">Testimonial {index}</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
