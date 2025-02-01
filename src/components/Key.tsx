import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface KeyProps {
    className?: string;
    children: ReactNode;
}


export const Key = ({ className, children }: KeyProps) => {
  return (
    <div className={twMerge("size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium", className)}>
        {children}
    </div>
  )
}
