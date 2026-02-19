import React, {type ButtonHTMLAttributes} from "react";
import classNames from 'classnames';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const buttonClasses = classNames(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    {
      'btn--full-width': fullWidth,
    },
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;