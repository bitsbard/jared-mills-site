import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MVPPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-black md:bg-transparent z-0">
        <div className="hidden md:block w-full h-full">
          <Image
            src="/algorism_background.jpg"
            alt="Neural Network Background"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white bg-gray-700 px-3 py-1 rounded-full">
            Jared Mills
          </Link>

          <nav className="flex items-center space-x-8">
            <Link href="/#projects" className="text-white hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="/#skills" className="text-white hover:text-gray-300 transition-colors">
              Skills
            </Link>
            <Link 
              href="mailto:jaredxmills@gmail.com" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="space-y-12">
              <h1 className="text-4xl font-bold">MVP Software Development Service</h1>
              
              <div className="text-gray-300 space-y-6">
                <p className="text-xl leading-relaxed">
                  Hi, I&apos;m Jared, a startup founder and honors Computer Science graduate from Oregon State University 
                  with real-world experience in building full-scale software products. I&apos;m now offering a specialized 
                  MVP (Minimum Viable Product) development service designed to take your startup idea from concept 
                  to a fully functional SaaS web app in just 4 weeks for a flat fee of $17,500.
                </p>

                <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-6">What You Get:</h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Rapid Turnaround: Get a complete MVP in only 4 weeks.</li>
                    <li>End-to-End Development: From initial design and architecture to deployment.</li>
                    <li>Dedicated Support: Direct communication and weekly progress updates throughout the project.</li>
                  </ul>
                </div>

                <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-6">Why Work With Me?</h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Honors CS graduate with proven startup experience.</li>
                    <li>Expertise in modern programming languages, cloud technologies, and AI/ML integration.</li>
                    <li>A commitment to quality, speed, and personalized service.</li>
                  </ul>
                </div>

                <div className="text-center pt-8">
                  <h2 className="text-2xl font-semibold mb-8">Ready to turn your idea into reality?</h2>
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
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Jared Mills. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MVPPage; 