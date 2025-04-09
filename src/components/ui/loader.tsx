
import React from 'react';
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export function Loader({ size = 'md', text, fullScreen = false, className, ...props }: LoaderProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const content = (
    <div className={cn(
      "flex flex-col items-center justify-center",
      fullScreen && "fixed inset-0 bg-white/80 backdrop-blur-sm z-50",
      className
    )} {...props}>
      <Loader2 className={cn("animate-spin text-yellow-500", sizeClasses[size])} />
      {text && <p className="mt-2 text-sm text-gray-600 font-medium">{text}</p>}
    </div>
  );

  return content;
}
