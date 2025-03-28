import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const MVPPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-black md:bg-transparent">
        <div className="hidden md:block w-full h-full">
          <Image
            src="/algorism_background.jpg"
            alt="Neural Network Background"
            layout="fill"
            className="object-cover z-0 opacity-80"
            priority
          />
        </div>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <Link href="/" className="text-2xl font-bold text-white bg-gray-700 px-3 py-1 rounded-full">
          Jared Mills
        </Link>
      </header>

      {/* Main content */}
      <main className="relative z-10 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">MVP Software Development Service</h1>
          
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg">
            <p className="text-lg mb-8">
              Hi, I&apos;m Jared, a startup founder and honors Computer Science graduate from Oregon State University with real-world experience in building full-scale software products. I&apos;m now offering a specialized MVP (Minimum Viable Product) development service designed to take your startup idea from concept to a fully functional SaaS web app in just 4 weeks for a flat fee of $17,500.
            </p>

            <h2 className="text-2xl font-bold mb-4">What You Get:</h2>
            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>Rapid Turnaround: Get a complete MVP in only 4 weeks.</li>
              <li>End-to-End Development: From initial design and architecture to deployment.</li>
              <li>Dedicated Support: Direct communication and weekly progress updates throughout the project.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Why Work With Me?</h2>
            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>Honors CS graduate with proven startup experience.</li>
              <li>Expertise in modern programming languages, cloud technologies, and AI/ML integration.</li>
              <li>A commitment to quality, speed, and personalized service.</li>
            </ul>

            <p className="text-xl mb-8 text-center">Ready to turn your idea into reality?</p>

            <div className="flex justify-center">
              <Link 
                href="https://calendar.app.google/MpzzuhrSxbe2gPcG9"
                className="inline-block px-8 py-4 bg-white text-black rounded-md transition-transform duration-300 hover:-translate-y-1 text-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Jared Mills. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MVPPage; 