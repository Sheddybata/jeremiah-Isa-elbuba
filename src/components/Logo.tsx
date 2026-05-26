import { siteConfig } from "@/lib/content";
import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeClasses = {
  sm: "h-7 w-auto sm:h-8",
  md: "h-8 w-auto sm:h-10",
  lg: "h-14 w-auto sm:h-16 md:h-20 lg:h-24",
};

export default function Logo({
  className = "",
  size = "md",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={siteConfig.logo}
      alt={`${siteConfig.shortName} logo`}
      width={180}
      height={48}
      priority={priority}
      className={`object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}
