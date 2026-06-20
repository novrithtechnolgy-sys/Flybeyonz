import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center w-[200px] font-heading font-semibold uppercase tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-[#041F48] text-white hover:bg-[#041F48]",
    secondary:
      "bg-[#2B2E83] text-white hover:bg-[#202265]",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-black",
  };

  const sizes = {
    sm: "px-5 py-2 text-[14px] md:text-[1px]",
    md: "px-7 py-3 text-[14px] md:text-[16px]",
    lg: "px-10 py-4 text-[18px] md:text-[20px]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}