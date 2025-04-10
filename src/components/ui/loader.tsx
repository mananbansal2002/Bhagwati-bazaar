import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  useLogo?: boolean;
}

export function Loader({
  size = 'md',
  text,
  fullScreen = false,
  useLogo = true,
  className,
  ...props
}: LoaderProps) {
  const iconClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const logoSizes = {
    sm: 'w-6 h-6', // 24px
    md: 'w-8 h-8', // 32px
    lg: 'w-12 h-12', // 48px
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        fullScreen && 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50',
        className
      )}
      {...props}
    >
      {useLogo ? (
        <div className={cn('slow-spin', logoSizes[size])}>
          <img
            src='/logo.png'
            alt='Loading...'
            className='w-full h-full object-contain'
            style={{ animationDuration: '2s' }} // 👈 slow down here
          />
        </div>
      ) : (
        <Loader2
          className={cn('slow-spin text-yellow-500', iconClasses[size])}
          style={{ animationDuration: '2s' }}
        />
      )}
      {text && <p className='mt-2 text-sm text-gray-600 font-medium'>{text}</p>}
    </div>
  );
}
