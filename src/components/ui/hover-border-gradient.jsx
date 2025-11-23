"use client";
import { cn } from "../../lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "relative inline-flex overflow-hidden rounded-2xl p-[1px] focus:outline-none",
        containerClassName
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 overflow-hidden rounded-2xl",
          "bg-[conic-gradient(from_0deg_at_50%_50%,#00FFA3_0deg,#DC1FFF_50deg,#00FFA3_120deg,#0047FF_160deg,#00FFA3_360deg)]",
          "animate-spin-slow"
        )}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: clockwise ? "normal" : "reverse",
        }}
      />
      <span
        className={cn(
          "relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-8 py-6 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900/90",
          className
        )}
      >
        {children}
      </span>
    </Tag>
  );
}
