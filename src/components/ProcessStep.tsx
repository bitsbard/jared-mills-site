import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="text-center mb-8 md:mb-0">
    <div className={`w-[64px] h-[64px] bg-[#08c0e5] rounded-full flex items-center justify-center text-black text-xl font-bold mb-4 mx-auto`}>
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);
