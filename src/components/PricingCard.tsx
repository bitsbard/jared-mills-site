import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  per: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({ title, price, per }) => (
  <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 text-center">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className={`text-[36px] font-bold text-[#08c0e5] mb-[8px]`}>{price}</p>
    <p className={`text-gray-400`}>{per}</p>
  </div>
);
