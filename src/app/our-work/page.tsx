'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard = ({ title, description, imageUrl, projectUrl }: ProjectCardProps) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden border border-gray-800 bg-black transition-transform duration-300 hover:-translate-y-2"
      style={{ borderWidth: '2px' }}
    >
      <Link href={projectUrl} className="block">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 px-2 py-1">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default function OurWorkPage() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden bg-black">
      {/* Full-screen Background - Hidden on mobile */}
      <div className="fixed top-0 left-0 w-full h-full hidden md:block">
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
          <Link href="https://calendar.app.google/14eTHjCTj6ZvJ1fi6" className="text-white hover:font-bold transition-all" target="_blank" rel="noopener noreferrer">
            Schedule Meeting
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 mt-16">
        <section className="max-w-4xl mx-auto px-4 py-16 text-left">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-xl text-gray-400">Explore the generative AI products we built.</p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 gap-8 mb-16">
            <ProjectCard
              title="Oshorts"
              description="AI-powered platform for creating faceless social media videos"
              imageUrl="/project1.png"
              projectUrl="https://oshorts-test.vercel.app/?ref=algorism"
            />
            <ProjectCard
              title="Thank John"
              description="AI tool directory platform with semantic search"
              imageUrl="/project2.png"
              projectUrl="https://www.thankjohn.com/?ref=algorism"
            />
            <ProjectCard
              title="ContextReply"
              description="AI-powered email and employee assistant"
              imageUrl="/project3.png"
              projectUrl="https://www.contextreply.com/?ref=algorism"
            />
          </div>

          <div className="text-left py-16">
            <h3 className="text-3xl font-bold mb-4">Want To Be Next?</h3>
            <p className="text-xl text-gray-400 mb-8">Let&apos;s talk and see if we can make it happen.</p>
            <Link 
              href="https://calendar.app.google/14eTHjCTj6ZvJ1fi6"
              className="inline-block px-8 py-4 bg-[#08c0e5] text-black rounded-md transition-transform duration-300 hover:-translate-y-1 text-lg font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </Link>
          </div>
        </section>
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
}
