import React, { FC, MouseEvent } from 'react';

type CustomButtonProps = {
  variant?:
    | 'percentage-selector'
    | 'preview-btn'
    | 'cancel-btn'
    | 'write-btn'
    | 'error-btn'
    | 'fetch-btn'
    | 'tag-btn'
    | 'disclaimer-btn'
    | 'dialog-btn'
    | 'chart-btn'
    | 'next-btn'
    | 'back-btn'
    | 'reset-btn'
    | 'search-btn'
    | 'discovery-chart-btn';
} & React.ComponentPropsWithoutRef<'button'>;

const Button: FC<CustomButtonProps> = ({ variant, children, className, ...rest }) => {
  return (
    <button className={`${variant} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export { Button };
