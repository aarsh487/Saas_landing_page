import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface AvatarProps {
    className?: string;
    children: ReactNode;
}

export const Avatar = ({ className, children }: AvatarProps) => {
  return (
    <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900", className)}>
        {children}
    </div>
  )
}
