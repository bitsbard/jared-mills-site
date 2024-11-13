import Image from 'next/image';
import Link from 'next/link';
import { FaRocket, FaCode, FaClock, FaUsers, FaSearch } from 'react-icons/fa';
import React from 'react';
import { FeatureCard } from '../components/FeatureCard';
import { ProcessStep } from '../components/ProcessStep';
import { PricingCard } from '../components/PricingCard';
import { Layout } from '../components/Layout';

export default function HomePage() {
  return (
    <Layout>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process - It&apos;s Simple!</h2>
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
      </main>
    </Layout>
  );
}
