import Image from 'next/image';
import Link from 'next/link';
import { 
  Brain, 
  Rocket, 
  Code2, 
  Zap, 
  Users, 
  Search,
  Check,
  ArrowRight
} from 'lucide-react';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full">
        <Image
          src="/algorism_background.jpg"
          alt="Neural Network Background"
          layout="fill"
          className="object-cover z-0 opacity-80"
          priority
        />
      </div>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/algorism.png"
            alt="Algorism Logo"
            width={80}
            height={24}
            className="object-contain"
          />
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link href="/our-work" className="text-white hover:text-[#08c0e5] transition-all">
            Portfolio
          </Link>
          <Link 
            href="https://calendar.app.google/e9nTLXZvwe4vFtRg8" 
            className="text-white hover:text-[#08c0e5] transition-all"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Schedule Call
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 mt-16">
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold mb-6">Power Your Business with AI</h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            From concept to deployment, we build cutting-edge AI solutions that transform 
            your business. Harness the power of LLMs, computer vision, and voice AI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeatureCard 
              icon={<Brain />} 
              title="AI-First Development" 
              description="Custom LLMs, RAG systems, and intelligent agents tailored to your needs." 
            />
            <FeatureCard 
              icon={<Rocket />} 
              title="Swift Deployment" 
              description="Full-stack AI solutions ready for market in 2-4 weeks." 
            />
            <FeatureCard 
              icon={<Code2 />} 
              title="End-to-End Solution" 
              description="From UI/UX to backend infrastructure and AI model deployment." 
            />
            <FeatureCard 
              icon={<Zap />} 
              title="Cutting-Edge Tech" 
              description="Latest in AI/ML, including GPT-4, Claude, and open-source models." 
            />
            <FeatureCard 
              icon={<Users />} 
              title="AI Engineering Experts" 
              description="Team of ML engineers and full-stack developers who've built successful AI products." 
            />
            <FeatureCard 
              icon={<Search />} 
              title="Data-Driven Approach" 
              description="Analytics integration and A/B testing for continuous improvement." 
            />
          </div>

          <Link 
            href="https://calendar.app.google/e9nTLXZvwe4vFtRg8"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#08c0e5] to-[#08a0c5] text-black rounded-md transition-all duration-300 hover:scale-105 text-lg font-semibold shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your AI Journey
          </Link>
        </section>

        {/* Process Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 bg-black bg-opacity-50">
          <h2 className="text-4xl font-bold mb-12 text-center">Our AI Development Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#08c0e5] hidden md:block" />
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
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              title="AI Consulting" 
              price="$200" 
              description="Strategic AI integration planning, use case identification, and implementation roadmap."
              features={[
                "AI readiness assessment",
                "Custom LLM strategy",
                "ROI analysis",
                "Risk mitigation planning"
              ]}
            />
            <ServiceCard 
              title="AI Development" 
              price="$150" 
              description="Full-stack AI solution development with state-of-the-art models and technologies."
              features={[
                "Custom LLM fine-tuning",
                "RAG system implementation",
                "Full-stack integration",
                "Deployment & monitoring"
              ]}
            />
          </div>
        </section>

        {/* Founder Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 relative rounded-full overflow-hidden">
                <Image
                  src="/founder.jpg"
                  alt="Founder"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
                <p className="text-gray-300 mb-4">
                  With over a decade of experience in AI and software development, 
                  our team has built numerous successful AI products. We're here to 
                  help you navigate the AI landscape and build solutions that drive 
                  real business value.
                </p>
                <Link 
                  href="https://x.com/stuartxmills" 
                  className="inline-flex items-center text-[#08c0e5] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on 𝕏 <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 relative z-10 bg-black bg-opacity-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <Image
              src="/algorism.png"
              alt="Algorism Logo"
              width={64}
              height={20}
              className="object-contain"
            />
            <p className="text-center md:text-left">
              <strong>Building the future of AI-powered applications</strong>
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
  <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-[#08c0e5] transition-all">
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
  <div className="text-center mb-8 md:mb-0 bg-black bg-opacity-50 p-6 rounded-lg relative z-10">
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
