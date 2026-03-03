"use client";

import { type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const maxWidths = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
} as const;

type ContainerSize = keyof typeof maxWidths;

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
  as?: ElementType;
}

export function Container({
  children,
  className,
  size = "lg",
  as: Component = "div",
}: ContainerProps) {
  const Tag = Component as "div";

  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidths[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
