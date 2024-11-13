import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
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
