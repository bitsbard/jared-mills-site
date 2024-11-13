import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';

export default function OurWorkPage() {
  return (
    <Layout>
      <main className="relative z-10 mt-16">
        <section className="max-w-4xl mx-auto px-4 py-16 text-left">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-xl text-gray-400">Explore the generative AI products we built.</p>
          </div>

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
          </div>

          <div className="text-left py-16">
            <h3 className="text-3xl font-bold mb-4">Want To Be Next?</h3>
            <p className="text-xl text-gray-400 mb-8">Let&apos;s talk and see if we can make it happen.</p>
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
    </Layout>
  );
}
