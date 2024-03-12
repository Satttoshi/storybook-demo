import React from 'react';

interface TextProps {
  content: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string; // Accept Tailwind color classes for flexibility
}

const Text: React.FC<TextProps> = ({
  content,
  size = 'md',
  color = 'text-black',
}) => {
  const baseStyle = 'font-sans leading-normal';
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const style = `${baseStyle} ${sizeClasses[size]} ${color}`;

  return <p className="leading-8 text-6 text-xl font-semibold">{content}</p>;
};

export default Text;
