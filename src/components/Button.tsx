import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  onClick,
}) => {
  const baseStyle =
    'px-4 py-2 rounded focus:outline-none focus:ring transition ease-in-out duration-300';
  const primaryStyle = 'bg-blue-500 hover:bg-blue-600 text-white';
  const secondaryStyle = 'bg-gray-500 hover:bg-gray-600 text-white';

  const style = `${baseStyle} ${variant === 'primary' ? primaryStyle : secondaryStyle}`;

  return (
    <button className={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
