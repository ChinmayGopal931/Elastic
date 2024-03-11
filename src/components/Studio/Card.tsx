import React from 'react';

interface Props {
  onClick?: () => void;
  description?: string;
  icon?: string;
  title?: string;
  color?: string;
  children?: React.ReactNode;
  className?: string;
}

function Card({ onClick, description, title, icon, color, children, className }: Props) {
  return (
    <div
      className={`bg-white dark:bg-studio_cards py-3 rounded-xl w-full h-[${
        icon ? '134px' : '100px'
      }] flex flex-col justify-center items-center cursor-pointer px-4 ${className}`}
      onClick={onClick}
    >
      {icon && <img src={icon} className="w-[45px] h-[45px]" />}
      {title && (
        <p
          className="text-center text-heading_light dark:text-primary_brand_01 pt-2"
          style={color ? { color: color } : {}}
        >
          {title}
        </p>
      )}
      <p className="text-center text-body_light_dark text-xs pt-2">{description}</p>
      {children}
    </div>
  );
}

export default Card;
