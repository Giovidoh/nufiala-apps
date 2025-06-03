"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    fullWidth?: boolean;
}

const BaseButton = ({
    children,
    variant = "primary",
    size = "md",
    href,
    onClick,
    className = "",
    type = "button",
    disabled = false,
    fullWidth = false,
}: ButtonProps) => {
    // Base styles
    const baseStyles =
        "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300";

    // Size variations
    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    // Variant styles
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
        secondary:
            "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100",
    };

    // Combine all styles
    const combinedStyles = `
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${fullWidth ? "w-full" : ""}
        ${className}
    `.trim();

    // Motion variants
    const buttonMotion = {
        rest: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    };

    // Render as Link if href is provided
    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                <motion.span
                    className="flex items-center justify-center w-full"
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonMotion}
                >
                    {children}
                </motion.span>
            </Link>
        );
    }

    // Render as button
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedStyles}
            initial="rest"
            whileHover={disabled ? undefined : "hover"}
            whileTap={disabled ? undefined : "tap"}
            variants={buttonMotion}
        >
            {children}
        </motion.button>
    );
};

export default BaseButton;
