import { ButtonHTMLAttributes } from "react";

export function Button({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium rounded-2xl px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  );
}
