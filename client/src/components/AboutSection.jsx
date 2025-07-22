// src/components/AboutSection.jsx
import React from 'react';
import { FaUserShield, FaStethoscope, FaHandsHelping } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-teal-50 to-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-6 tracking-wide drop-shadow-sm">
          About Us
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-700">
          At <span className="font-semibold text-teal-800">Greenwich Pharmacy</span>, we are dedicated to delivering 
          exceptional healthcare services tailored to your unique needs. Our compassionate and experienced pharmacists 
          provide personalized guidance and support to help you achieve optimal health and wellness.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
          <div className="p-6 bg-white rounded-lg shadow-lg border border-teal-100 hover:shadow-xl transform hover:scale-105 transition duration-300">
            <div className="text-teal-700 mb-4 text-4xl">
              <FaUserShield />
            </div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Personalized Care</h3>
            <p className="text-gray-600">
              We tailor our services to your health goals, ensuring you get the best advice and treatment.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg border border-teal-100 hover:shadow-xl transform hover:scale-105 transition duration-300">
            <div className="text-teal-700 mb-4 text-4xl">
              <FaStethoscope />
            </div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Trusted Pharmacists</h3>
            <p className="text-gray-600">
              Our pharmacists have years of experience, always ready to answer your questions and concerns.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg border border-teal-100 hover:shadow-xl transform hover:scale-105 transition duration-300">
            <div className="text-teal-700 mb-4 text-4xl">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Community Focus</h3>
            <p className="text-gray-600">
              We’re committed to improving the health and wellbeing of our community through quality services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
