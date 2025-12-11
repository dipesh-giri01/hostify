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
      "font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500";

    const variants = {
      primary: "bg-orange-500 text-white hover:bg-orange-300",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-5 py-4 text-base", // 20px left/right padding, 16px top/bottom = 58px height
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
