"use client";

import React from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  variant?: "default" | "auth" | "search";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon,
      variant = "default",
      size = "md",
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "w-full bg-white border border-gray-d9 rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors";

    const variants = {
      default: "border-gray-d9 focus:ring-orange-500",
      auth: "border-gray-d9 focus:ring-orange-500",
      search: "border-gray-d9 focus:ring-orange-500",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm h-10",
      md: "px-3 py-4 text-base h-13 rounded",
      lg: "px-3 py-4 text-base h-15 rounded",
    };

    const sizeStyles: Record<string, string> = {
      sm: "px-3 py-2 text-sm h-10",
      md: "px-3 py-4 text-base h-[52px]",
      lg: "px-3 py-4 text-base h-[62px]",
    };

    const widthClass = fullWidth ? "w-full" : "";

    const containerClass = icon ? "relative" : "";
    const inputPaddingClass = icon ? "pr-10" : "";

    return (
      <div className={containerClass}>
        {label && (
          <label className="block text-sm font-medium text-gray-900 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`${baseStyles} ${sizeStyles[size]} ${widthClass} ${inputPaddingClass} ${className}`}
          {...props}
        />
        {icon && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            {icon}
          </span>
        )}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
