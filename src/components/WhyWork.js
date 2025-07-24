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
      icon: "./expertise.png", // Replace with actual icon paths
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
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10" style={{ color: "#333" }}>
        Why Work with JustCreativeDesigns?
      </h2>

      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 auto-rows-auto
                                      max-w-6xl mx-auto justify-items-center flex justify-center">

        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md"
           style={{color:"black"}}>
            <div className="flex items-start space-x-3" > 
              <div className="w-15 h-15 p-1 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                <img src={item.icon} alt={item.title} className="w-15 h-15" style={{color:"black"}} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
