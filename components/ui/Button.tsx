import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 border-2 border-black/10",
    outline:
      "bg-transparent text-white border-2 border-white/40 hover:bg-white hover:text-dark-green",
    ghost:
      "bg-transparent text-green-accent hover:text-white underline-offset-4",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-8 py-3.5 text-base gap-2",
    lg: "px-10 py-4 text-lg gap-2.5",
  };

  const roundedStyles =
    variant === "primary" || variant === "outline" ? "rounded-full" : "";

  const combinedClassName = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    roundedStyles,
    className,
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}

        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </Link>
    );
  }

  return (
    <button className={combinedClassName}>
      {children}

      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}
