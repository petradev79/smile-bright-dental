import { forwardRef } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col">
        <label
          htmlFor={inputId}
          className="font-body text-sm font-medium text-neutral-700 mb-1.5 block"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3",
            "font-body text-base text-neutral-900 placeholder:text-neutral-400",
            "focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none",
            "disabled:bg-neutral-100 disabled:text-neutral-400",
            "transition-all duration-[120ms]",
            error && "border-error-500 focus:border-error-500 focus:ring-error-100",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-error-500 font-body">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-xs text-neutral-500 font-body">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
