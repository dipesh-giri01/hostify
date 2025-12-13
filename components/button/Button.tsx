"use client";

import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "cursor-pointer font-semibold rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500";

    const variants = {
      primary: "cursor-pointer bg-orange-500 text-white hover:bg-orange-400",
      secondary: "cursor-pointer bg-gray-200 text-gray-900 hover:bg-gray-300",
      outline: "cursor-pointer border border-orange-500 text-orange-500 hover:bg-orange-50",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-9 h-14 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const widthClass = fullWidth ? "w-full max-w-xs" : "max-w-xs";

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
