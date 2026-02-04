
import React from 'react';
import { COLORS } from '../constants';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-20'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${sizes[size]}`}>
      <div className="flex items-baseline leading-none font-black tracking-tighter italic">
        <span className="text-black text-4xl">j</span>
        <span style={{ color: COLORS.primary }} className="text-4xl -ml-1">R</span>
      </div>
      <div className="text-[8px] font-bold uppercase tracking-widest text-black">
        Chicotes Elétricos
      </div>
    </div>
  );
};
