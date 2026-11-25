import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg";
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "auto",
  size = "md",
  className = "",
  showTagline = false,
}) => {
  const isLight = variant === "light";

  const heightClasses = {
    sm: "h-5 sm:h-5.5",
    md: "h-6 sm:h-7",
    lg: "h-7 sm:h-8",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-start transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="OveraTech - Navigate Your Next"
    >
      <div className={`relative ${heightClasses[size]} w-auto aspect-[936/129]`}>
        <Image
          src={isLight ? "/logo-light.png" : "/logo-dark.png"}
          alt="OveraTech"
          width={936}
          height={129}
          priority
          className="h-full w-auto object-contain"
        />
      </div>
      {showTagline && (
        <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-mono mt-1">
          Engineering Studio
        </span>
      )}
    </Link>
  );
};
