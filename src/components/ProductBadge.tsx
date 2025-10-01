import { ReactNode } from 'react';

interface ProductBadgeProps {
  children: ReactNode;
  variant: 'offer' | 'exclusive' | 'free-shipping' | 'guarantee';
}

export const ProductBadge = ({ children, variant }: ProductBadgeProps) => {
  const variants = {
    offer: 'bg-red-500 text-white',
    exclusive: 'bg-purple-600 text-white',
    'free-shipping': 'bg-green-600 text-white',
    guarantee: 'bg-blue-600 text-white',
  };

  return (
    <span className={`px-2 py-1 rounded-md text-xs font-bold ${variants[variant]}`}>
      {children}
    </span>
  );
};