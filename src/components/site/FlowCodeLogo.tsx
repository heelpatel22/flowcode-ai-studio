import React from "react";

interface FlowCodeLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  textClassName?: string;
}

export function FlowCodeLogo({
  className = "h-8 w-auto",
  iconOnly = false,
  size = "md",
  textClassName = "",
}: FlowCodeLogoProps) {
  const iconSizes = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-11 w-11",
    xl: "h-14 w-14",
  };

  const currentIconSize = className.includes("h-") ? className : iconSizes[size];

  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      {/* Icon Image with Glow Effect */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-40 blur-md transition-opacity group-hover:opacity-80" />
        <img
          src="/logo-icon.png"
          alt="FLOWCODE AI Logo"
          className={`${currentIconSize} relative z-10 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-transform duration-300 group-hover:scale-105`}
        />
      </div>

      {!iconOnly && (
        <span
          className={`font-display font-bold tracking-tight gradient-text text-xl ${textClassName}`}
        >
          FLOWCODE AI
        </span>
      )}
    </div>
  );
}

export function FlowCodeLogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-30 blur-sm" />
      <img
        src="/logo-icon.png"
        alt="FLOWCODE AI Icon"
        className={`${className} relative z-10 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]`}
      />
    </div>
  );
}
