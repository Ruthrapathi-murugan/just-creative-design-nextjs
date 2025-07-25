'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // For dropdown icons

const faqData = [
  {
    question: 'What is included during the free consultation?',
    answer: 'A quick assessment of your needs, expert suggestions, a rough cost & timeline estimate, and time to ask questions. No obligations.',
  },
  {
    question: 'What aspects should I consider before starting my home interior design project in Bangalore?',
    answer: 'Consider your budget, lifestyle needs, available space, preferred style, and timeline. Also, factor in local regulations, apartment guidelines, and climate-based material choices for durability.',
  },
  {
    question: 'Can you show me completed projects?',
    answer: 'Yes! We have a portfolio of over 100 finished apartments in Bangalore. We are glad to organize visits or offer virtual tours.',
  },
  {
    question: 'What separates Just Creative Designs from other interior design companies in Bangalore?',
    answer: 'We blend creativity with functionality, offering tailored designs that reflect your lifestyle. From concept to execution, we ensure transparent communication, timely delivery, and thoughtful use of space — all backed by local expertise and personalized service.',
  },
  {
    question: 'What distinguishes Just Creative Designs from other interior design businesses in Bangalore?',
    answer: 'Just Creative Designs stands out through its client-first approach, custom-tailored interiors, and seamless end-to-end execution. We combine aesthetic innovation with practical solutions, ensuring each space is beautiful, functional, and uniquely yours — all delivered with transparency, timeliness, and local expertise.',
  },
  {
    question: 'Can you design interiors for compact or 1BHK apartments?',
    answer: 'Absolutely. We specialize in maximizing small spaces with smart layouts, multi-functional furniture, and space-saving solutions — creating stylish, comfortable, and highly functional homes, no matter the size.',
  },
  {
    question: 'Do you offer eco-friendly or sustainable interior solutions?',
    answer: 'Yes, we do. We incorporate sustainable materials, energy-efficient lighting, and eco-conscious design practices to create interiors that are both stylish and environmentally responsible.',
  },
  {
    question: 'Will you help me choose color schemes, materials, and decor elements?',
    answer: 'Yes, we guide you through every detail — from selecting color palettes and materials to choosing the right décor — ensuring everything aligns with your style and space.',
  },
  {
    question: 'Do you offer customized furniture as part of the interior design?',
    answer: 'Yes, we design and deliver custom furniture tailored to your space, style, and functional needs — ensuring a perfect fit and cohesive look throughout your home.',
  },
  {
    question: 'Do you design interiors that are child- or pet-friendly?',
    answer: 'Yes, we create safe, durable, and easy-to-maintain interiors tailored for families with children or pets — without compromising on style or comfort.',
  },
  {
    question: 'Can I get phase-wise execution if I want to do interiors in parts?',
    answer: 'Yes, we offer flexible, phase-wise execution plans — allowing you to design and implement your interiors step by step, based on your budget and timeline.',
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 
  return (
    <div className="bg-gray-50 text-gray-800"style={{ backgroundColor: 'white',color: 'black' }}>
    <section className="max-w-6xl mx-auto px-4 py-16" style={{ backgroundColor: 'white',color: 'black' }}>
      <h2 className="text-4xl font-semibold mb-8 " >FAQ</h2>
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="p-4 border-t text-gray-600 bg-gray-50">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
