import React, {  HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface Tagprops {
    className?: string;
    children: ReactNode;
}

export const Tag = ({className, children}: Tagprops) => {
  return (
    <div className={twMerge("inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center", className)}>
        <span>&#10038;</span>
        <span className='text-sm'>{children}</span>
    </div>
  )
}
