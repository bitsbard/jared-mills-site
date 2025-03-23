import Image from 'next/image';
import Link from 'next/link';
import { 
  Code,
  Github,
  Linkedin,
  Mail,
  Terminal,
  ArrowRight,
  Layout,
  Database,
  Server
} from 'lucide-react';
import React from 'react';

const HomePage: React.FC = () => {
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
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
          Jared Mills
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link href="#projects" className="text-white hover:text-gray-300 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-white hover:text-gray-300 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 mt-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Profile Image */}
            <div className="w-24 h-24 relative">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-2xl">
                <Image
                  src="/Profile.jpg"
                  alt="Jared Mills"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-6xl font-bold mb-6">Software Engineer</h1>
              <p className="text-2xl text-gray-300 mb-6 max-w-3xl">
                Building scalable and high-quality software products
              </p>
              <div className="space-y-4 mb-8 text-gray-300">
                <p className="text-lg">
                  B.S. Computer Science, Oregon State University
                </p>
                <p className="text-lg">
                  Full-stack web developer since 2022, with a focus on AI technologies since 2019
                </p>
              </div>
              <div className="flex justify-center md:justify-start space-x-6">
                <SocialLink href="https://github.com/bitsbard" icon={<Github />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/jaredxmills/" icon={<Linkedin />} label="LinkedIn" />
                <SocialLink href="mailto:jaredxmills@gmail.com" icon={<Mail />} label="Email" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="BrightlyLoop"
              description="AI platform for creating culturally relevant user experiences through specialized chatbots grounded by experts and UX research tools"
              tech={["AI Routing", "Chatbot", "RAG", "Docker", "Firestore DB", "Firebase Storage", "Next.js"]}
              link="https://brightlyloop.ai"
            />
            <ProjectCard 
              title="ContextReply"
              description="AI email assistant and onboarding assistant that generates personalized, context-aware responses by analyzing business documentation"
              tech={["Custom RAG", "Gmail API", "Vector DB", "Semantic Search", "TypeScript", "JavaScript", "Firestore DB", "Firebase Storage"]}
              link="https://contextreply.com"
            />
            <ProjectCard 
              title="FITPIX"
              description="AI fashion app enabling users to virtually try on and transform outfits in their personal photos using state of the art image generation"
              tech={["Gemini API", "Chatbot", "TypeScript", "JavaScript", "Firestore DB", "Firebase Storage", "Next.js"]}
              link="https://fitpix.ai"
            />
            <ProjectCard 
              title="Oshorts"
              description="[Discontinued] AI video creation platform for generating faceless viral content with custom themes and music that can be uploaded to TikTok or YouTube"
              tech={["Image Generation", "Video Processing", "TTS", "OpenAI", "FFmpeg", "Firestore DB", "Firebase Storage", "Next.js"]}
              link="https://www.youtube.com/watch?v=suxaPyXypnM"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Code />} 
              title="Frontend" 
              skills={["React", "TypeScript", "JavaScript", "Next.js"]} 
            />
            <SkillCard 
              icon={<Server />} 
              title="Backend" 
              skills={["Node.js", "Express", "Python", "Java"]} 
            />
            <SkillCard 
              icon={<Database />} 
              title="Databases" 
              skills={["PostgreSQL", "Firestore", "S3", "MySQL"]} 
            />
            <SkillCard 
              icon={<Terminal />} 
              title="Tools" 
              skills={["Git", "Docker", "AWS", "GCP"]} 
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <p className="text-center text-gray-300 mb-8">
            I&apos;m always open to discussing new projects, opportunities, and collaborations.
          </p>
          <div className="flex justify-center">
            <Link 
              href="mailto:jaredxmills@gmail.com"
              className="inline-block px-8 py-4 bg-white text-black rounded-md transition-transform duration-300 hover:-translate-y-1 text-lg font-semibold"
            >
              Send me an email
            </Link>
          </div>
        </section>
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

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <Link 
    href={href}
    className="text-white hover:text-gray-300 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <div className="text-2xl">{icon}</div>
  </Link>
);

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
    <div className="text-3xl mb-4 text-white flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
    <ul className="text-gray-300">
      {skills.map((skill, index) => (
        <li key={index} className="mb-2 text-center">{skill}</li>
      ))}
    </ul>
  </div>
);

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, link }) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg h-[300px] flex flex-col">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300 mb-4 h-[60px] overflow-hidden text-sm">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item, index) => (
        <span key={index} className="bg-gray-700 px-2 py-1 rounded-full text-xs text-gray-200">
          {item}
        </span>
      ))}
    </div>
    <Link 
      href={link}
      className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 mt-auto"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.includes('github.com') ? (
        <>
          <Github size={16} />
          View on GitHub
        </>
      ) : link.includes('youtube.com') ? (
        <>
          <ArrowRight size={16} />
          Watch Demo
        </>
      ) : (
        <>
          <ArrowRight size={16} />
          Visit Website
        </>
      )}
    </Link>
  </div>
);

export default HomePage;
