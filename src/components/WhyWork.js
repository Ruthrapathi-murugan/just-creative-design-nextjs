'use client'
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

// components/WhyWork.js
export default function WhyWork() {
  const features = [
    {
      title: "Proven expertise",
      description:
        "With a seasoned staff and over 10 years of expertise, our designers pair beauty with purpose, so every corner serves you well and still looks amazing.",
      icon: "./expertise.png",
    },
    {
      title: "Complete Project Management",
      description:
        "From design to setting up, we handle the entire process—planning, sourcing, and execution—so you don’t have to chase vendors or compromise on quality.",
      icon: "./project-management.png",
    },
    {
      title: "On-Time Project Delivery",
      description:
        "We respect your time. Deadlines are not suggestions; they are commitments. We always deliver on time.",
      icon: "./delivery.png",
    },
    {
      title: "Quality that Lasts",
      description:
        "We exclusively use high-quality materials and ensure that our work will look great for years.",
      icon: "./quality.png",
    },
    {
      title: "Free Design Consultation",
      description:
        "Not sure where to start? Chat with us for free and without obligation. We will walk you through the options, timelines, and costs before you make a decision.",
      icon: "./consultation.png",
    },
  ];

  return (
    <section className="px-4 py-12" style={{ backgroundColor: "#f9f9f9" }}>
      <h2 
        className="font-semibold text-left sm:text-center mb-10 sm:pt-0" 
        style={{ color: "#333", fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)" , fontWeight:"400" }}
      >
        Why Work with JustCreativeDesigns?
      </h2>

      {/* First Row - 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {features.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md"
            style={{ color: "black" }}
          >
            <div className="items-start space-x-3">
              <div className="w-15 h-15 p-1 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                <img src={item.icon} alt={item.title} className="w-15 h-15" />
              </div>
              <div>
                <h3 className="text-lg mb-4" style={{fontFamily:"Helvetica Neue", fontSize:"24px"}}>{item.title}</h3>
                <p className="text-sm text-gray-600" style={{fontFamily:"Helvetica Neue", fontSize:"18px"}}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - 2 Cards Centered */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {features.slice(3).map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            style={{ color: "black" }}
          >
            <div className="items-start space-x-3">
              <div className="w-15 h-15 p-1 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                <img src={item.icon} alt={item.title} className="w-15 h-15" />
              </div>
              <div>
                <h3 className="text-lg mb-4" style={{fontFamily:"Helvetica Neue", fontSize:"24px"}}>{item.title}</h3>
                <p className="text-sm text-gray-600" style={{fontFamily:"Helvetica Neue", fontSize:"18px"}}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
