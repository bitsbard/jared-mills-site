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
      className="relative rounded-lg overflow-hidden border border-gray-400 transition-transform duration-300 hover:-translate-y-2"
      // Border style and width
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
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </Link>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white relative">
      {/* Full-page background image */}
      <Image
        src="/algorism_background.jpg"
        alt="Algorism Background"
        fill
        className="object-cover z-0"
        priority
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      />

      {/* Page content without background overlay */}
      <header className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between relative z-10">
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
          <Link href="/" className="text-white hover:font-bold transition-all">
            Our Work
          </Link>
          {/* Updated link for "Talk With Us" to direct to "Book a Call" page */}
          <Link href="https://calendar.app.google/e9nTLXZvwe4vFtRg8" className="text-white hover:font-bold transition-all" target="_blank" rel="noopener noreferrer">
            Talk With Us
          </Link>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="max-w-4xl mx-auto px-4 py-16 text-left">
          {/* Centered container with left-aligned text */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-xl text-gray-400">Discover the future we&apos;re building, one project at a time</p>
          </div>

          {/* Displaying each project in a single column (one per row) */}
          <div className="grid grid-cols-1 gap-8 mb-16">
            <ProjectCard
              title="Project Alpha"
              description="AI-powered analytics platform revolutionizing business intelligence"
              imageUrl="/project1.png"
              projectUrl="#"
            />
            <ProjectCard
              title="Project Beta"
              description="Next-generation language model for enterprise communication"
              imageUrl="/project2.png"
              projectUrl="#"
            />
          </div>

          <div className="text-left py-16">
            <h3 className="text-3xl font-bold mb-4">Could You Be Next?</h3>
            <p className="text-xl text-gray-400 mb-8">Let&apos;s talk and see if you&apos;re a good fit.</p>
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

      {/* Footer with solid black background */}
      <footer className="bg-black py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <Image
              src="/algorism.png"
              alt="Algorism Logo"
              width={60}
              height={16}
              className="object-contain"
            />
            <p className="text-gray-400 text-center md:text-left">
              Transform your idea into a market-ready Gen AI MVP in weeks. Fast, affordable, and hassle-free.
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

export default LandingPage;
