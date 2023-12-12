import React, { useState } from 'react';
import './FAQ.css'

const FAQ: React.FC = () => {
  const faqData = [
    {
      id: 1,
      question: 'What benefits do I get with the Premium plan?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      question: 'Can I cancel my subscription at any time?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 3,
      question: 'How do I upgrade my plan?',
      answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 4,
      question: 'Is there a free trial available?',
      answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 5,
      question: 'Do you offer refunds?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="text-white">
      {faqData.map((faq) => (
        <div key={faq.id} className="faq-item mb-4">
          <div
            className={`faq-question bg-gray-200 rounded cursor-pointer p-2 ${
              openIndex === faq.id ? 'bg-blue-500' : ''
            }`}
            onClick={() => toggleAnswer(faq.id)}
          >
            <span className={`text-white ${openIndex === faq.id ? 'font-bold' : ''}`}>{faq.question}</span>
          </div>
          {openIndex === faq.id && (
            <div className="faq-answer p-2 bg-white border rounded border-gray-300">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
