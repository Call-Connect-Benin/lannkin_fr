"use client";

import { forwardRef } from "react";

import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-on-accent font-semibold hover:brightness-110 shadow-[0_0_20px_rgba(73,143,109,0.15)]",
  secondary:
    "glass border border-white/10 text-white hover:border-accent/40 hover:text-accent",
  ghost: "bg-transparent text-white hover:bg-white/5 hover:text-accent",
  danger:
    "bg-danger text-white font-semibold hover:brightness-110 shadow-[0_0_20px_rgba(255,68,68,0.15)]",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm rounded-md gap-1.5",
  md: "px-6 py-3 text-base rounded-lg gap-2",
  lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "md",
    loading = false,
    href,
    className,
    children,
    ...props
  },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center font-body font-medium transition-colors duration-200 cursor-pointer select-none",
    "disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  const content = (
    <>
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(props as Omit<
            React.ComponentPropsWithoutRef<typeof Link>,
            keyof ButtonBaseProps
          >)}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      disabled={loading || (props as ButtonAsButton).disabled}
      {...motionProps}
      {...(props as Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps>)}
    >
      {content}
    </motion.button>
  );
});
