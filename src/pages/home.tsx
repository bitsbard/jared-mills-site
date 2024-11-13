import Image from 'next/image';
import Link from 'next/link';
import { FaRocket, FaCode, FaClock, FaUsers, FaSearch } from 'react-icons/fa';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Full-screen Background */}
      <div className="fixed top-0 left-0 w-full h-full">
        <Image
          src="/algorism_background.jpg"
          alt="Algorism Background"
          layout="fill"
          className="object-cover z-0"
          priority
        />
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/algorism.png"
            alt="Algorism Logo"
            width={75}
            height={20}
            className="object-contain"
          />
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link href="/our-work" className="text-white hover:font-bold transition-all">
            Our Work
          </Link>
          <Link href="https://calendar.app.google/e9nTLXZvwe4vFtRg8" className="text-white hover:font-bold transition-all" target="_blank" rel="noopener noreferrer">
            Talk With Us
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 mt-16">
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Transform Your Idea into Reality</h1>
          <p className="text-xl text-gray-400 mb-8">Build your MVP in weeks, not months. Fast, affordable, and hassle-free.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeatureCard icon={<FaRocket />} title="Rapid Development" description="Your MVP ready in 2-4 weeks." />
            <FeatureCard icon={<FaCode />} title="Complete Package" description="Web application and landing page included." />
            <FeatureCard icon={<FaClock />} title="Modern Technology" description="Latest tech for fast, stable, and scalable products." />
            <FeatureCard icon={<FaUsers />} title="Experienced Team" description="Years of experience building successful startups." />
            <FeatureCard icon={<FaSearch />} title="SEO-optimized" description="Built-in search engine optimization." />
          </div>

          <Link 
            href="https://calendar.app.google/e9nTLXZvwe4vFtRg8"
            className="inline-block px-8 py-4 bg-[#08c0e5] text-black rounded-md transition-transform duration-300 hover:-translate-y-1 text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </Link>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process - It's Simple!</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <ProcessStep number={1} title="Specification" description="We discuss your idea and create a detailed specification." />
            <ProcessStep number={2} title="Development" description="Watch your MVP take shape with regular updates." />
            <ProcessStep number={3} title="Launch" description="We deploy your product and provide training." />
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PricingCard title="Consultation" price="$200" per="per hour" />
            <PricingCard title="Development" price="$150" per="per hour" />
          </div>
        </section>

        {/* Add more sections as needed */}
      </main>

      {/* Footer */}
      <footer className="py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <Image
              src="/algorism.png"
              alt="Algorism Logo"
              width={60}
              height={16}
              className="object-contain"
            />
            <p className="text-white text-center md:text-left">
              <strong>Transform your idea into an AI app in weeks</strong>
            </p>
          </div>
          <p className="text-center text-gray-400">
            © 2024 Algorism LLC. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800">
    <div className="text-4xl mb-4 text-[#08c0e5]">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="text-center mb-8 md:mb-0">
    <div className={`w-[64px] h-[64px] bg-[#08c0e5] rounded-full flex items-center justify-center text-black text-xl font-bold mb-4 mx-auto`}>
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface PricingCardProps {
  title: string;
  price: string;
  per: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, per }) => (
  <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 text-center">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className={`text-[36px] font-bold text-[#08c0e5] mb-[8px]`}>{price}</p>
    <p className={`text-gray-400`}>{per}</p>
  </div>
);

export default HomePage;
