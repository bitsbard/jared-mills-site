'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Brain, 
  Rocket, 
  Code2, 
  Zap, 
  Users, 
  Search,
  Check
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const techStack = [
  { src: '/javascript.png', alt: 'JavaScript' },
  { src: '/typescript.png', alt: 'TypeScript' },
  { src: '/python.png', alt: 'Python' },
  { src: '/react.png', alt: 'React' },
  { src: '/node.png', alt: 'Node.js' },
  { src: '/aws.png', alt: 'AWS' },
  { src: '/postgresql.png', alt: 'PostgreSQL' },
  { src: '/vercel.png', alt: 'Vercel' },
  { src: '/tensorflow.png', alt: 'TensorFlow' },
  { src: '/openai.png', alt: 'OpenAI' },
  { src: '/segmind.png', alt: 'Segmind' },
  { src: '/gcp.png', alt: 'GCP' },
  { src: '/hotjar.png', alt: 'Hotjar' },
  { src: '/llama.png', alt: 'Llama' },
  { src: '/github.png', alt: 'GitHub' }
];

const HomePage: React.FC = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => (prev - 1) % (techStack.length * 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
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
          <Link 
            href="https://calendar.app.google/e9nTLXZvwe4vFtRg8" 
            className="text-white hover:font-bold transition-all"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Schedule Meeting
          </Link>
        </nav>
      </header>

      <main className="relative z-10 mt-16">
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold mb-6">Power Your Business with AI</h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            From concept to deployment, we build cutting-edge generative AI solutions that transform business productivity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeatureCard 
              icon={<Brain />} 
              title="AI-First Development" 
              description="Custom generative AI image, video, audio, and text systems tailored to your needs" 
            />
            <FeatureCard 
              icon={<Rocket />} 
              title="Swift Deployment" 
              description="Full-stack AI solutions ready for market in 3-4 weeks" 
            />
            <FeatureCard 
              icon={<Code2 />} 
              title="End-to-End Solution" 
              description="From UI/UX to backend infrastructure and AI model deployment" 
            />
            <FeatureCard 
              icon={<Zap />} 
              title="Cutting-Edge Tech" 
              description="Latest in AI/ML, including GPT-4, Claude, and open-source models" 
            />
            <FeatureCard 
              icon={<Users />} 
              title="AI Experts" 
              description="Team of ML engineers and full-stack developers who&apos;ve built successful AI products" 
            />
            <FeatureCard 
              icon={<Search />} 
              title="Data-Driven" 
              description="Analytics integration and A/B testing for continuous improvement" 
            />
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
          <h2 className="text-4xl font-bold mb-12 text-center">Our AI Development Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <ProcessStep 
              number={1} 
              title="Discovery & Design" 
              description="We analyze your needs and design an AI solution architecture." 
            />
            <ProcessStep 
              number={2} 
              title="AI Development" 
              description="Rapid prototyping and iterative development with regular demos." 
            />
            <ProcessStep 
              number={3} 
              title="Deployment & Training" 
              description="Seamless deployment and comprehensive team training." 
            />
          </div>
          
          <div className="w-full overflow-hidden mt-16 relative">
            <div 
              className="flex items-center whitespace-nowrap"
              style={{
                transform: `translateX(${position}px)`,
                transition: 'transform 50ms linear'
              }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={`${tech.alt}-${index}`} className="mx-4">
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Hi I&apos;m Stuart. With years in AI and machine learning I&apos;ve seen its transformative power firsthand. At <strong className="text-white">Algorism</strong> we help businesses like yours harness generative AI. You bring the vision we bring the expertise to make it real.
            </p>
            <Link 
              href="https://x.com/stuartxmills" 
              className="inline-flex items-center px-4 py-2 bg-black bg-opacity-50 rounded-full border border-gray-700 hover:border-[#08c0e5] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm font-medium">
                Follow on 𝕏<span className="ml-2">@stuartxmills</span>
              </span>
            </Link>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ServiceCard 
              title="AI Consulting" 
              price="$200" 
              description="Strategic AI integration planning, use case identification, and implementation roadmap."
              features={[
                "AI readiness assessment",
                "Custom generative AI strategy",
                "ROI analysis",
                "Risk mitigation planning"
              ]}
            />
            <ServiceCard 
              title="AI Development" 
              price="$150" 
              description="Full-stack AI solution development with state-of-the-art models and technologies."
              features={[
                "Image, video, or audio generative models",
                "RAG or LLM system implementation",
                "Full-stack integration",
                "Deployment & monitoring"
              ]}
            />
          </div>
          <div className="text-center">
            <Link 
              href="https://calendar.app.google/e9nTLXZvwe4vFtRg8"
              className="inline-block px-8 py-4 bg-[#08c0e5] text-black rounded-md transition-transform duration-300 hover:-translate-y-1 text-lg font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </Link>
          </div>
        </section>
      </main>

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
            © 2024 Algorism LLC. All rights reserved.
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
    <div className="text-4xl mb-4 text-[#08c0e5] flex justify-center">{icon}</div>
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
  <div className="text-center mb-8 md:mb-0 p-6 rounded-lg relative z-10">
    <div className="w-16 h-16 bg-[#08c0e5] rounded-full flex items-center justify-center text-black text-xl font-bold mb-4 mx-auto">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description, features }) => (
  <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-gray-800">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-3xl font-bold text-[#08c0e5] mb-2">{price}<span className="text-lg text-gray-400">/hour</span></p>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 text-[#08c0e5] mr-2" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default HomePage;
