"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Button from "./buttons/Button";

// Navigation links table
const navigationLinks = [
    {
        id: 1,
        label: "Pourquoi nous",
        href: "#why-us",
        icon: (
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            </svg>
        ),
    },
    {
        id: 2,
        label: "Comment ça marche",
        href: "#how-it-works",
        icon: (
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
    {
        id: 3,
        label: "Témoignages",
        href: "#testimonials",
        icon: (
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
            </svg>
        ),
    },
] as const;

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("hero");

    // Handle scroll and section detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Get all sections
            const sections = navigationLinks.map((link) =>
                link.href.replace("#", "")
            );
            sections.push("hero"); // Add hero section

            // Find the current section
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Consider a section active when its top is near the top of the viewport
                    // and its bottom is still below the middle of the viewport
                    return (
                        rect.top <= 150 && rect.bottom >= window.innerHeight / 2
                    );
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle mobile menu
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const menuVars = {
        initial: {
            x: "100%",
        },
        animate: {
            x: 0,
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            x: "100%",
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 1],
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        animate: {
            transition: {
                staggerChildren: 0.09,
                delayChildren: 0.3,
            },
        },
    };

    const linkVars = {
        initial: {
            y: 30,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    // Smooth scroll function
    const handleLinkClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="#hero"
                        onClick={(e) => handleLinkClick(e, "#hero")}
                        className={`flex-shrink-0 text-2xl font-bold transition-colors ${
                            activeSection === "hero"
                                ? "text-blue-600"
                                : "text-gray-700 hover:text-blue-600"
                        }`}
                    >
                        Nufiala
                    </Link>

                    {/* Center Navigation Links */}
                    <div className="hidden lg:flex items-center justify-center flex-1 mx-12">
                        <div className="flex items-center space-x-12">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleLinkClick(e, link.href)
                                    }
                                    className={`relative whitespace-nowrap font-medium text-sm transition-colors ${
                                        activeSection ===
                                        link.href.replace("#", "")
                                            ? "text-blue-600"
                                            : "text-gray-700 hover:text-blue-600"
                                    }`}
                                >
                                    {link.label}
                                    {activeSection ===
                                        link.href.replace("#", "") && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button
                            href="/inscription"
                            variant="secondary"
                            size="sm"
                        >
                            Inscription
                        </Button>
                        <Button href="/connexion" variant="primary" size="sm">
                            Connexion
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 lg:hidden rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
                                onClick={() => setIsMobileMenuOpen(false)}
                            />

                            {/* Menu */}
                            <motion.div
                                variants={menuVars}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg lg:hidden z-50"
                            >
                                {/* Header */}
                                <div className="p-6 border-b border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-blue-600">
                                            Nufiala
                                        </span>
                                        <button
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                            className="p-2 -mr-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-500"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Navigation Links */}
                                <motion.div
                                    variants={containerVars}
                                    initial="initial"
                                    animate="animate"
                                    className="flex-1 overflow-y-auto py-6 px-6"
                                >
                                    <nav className="space-y-2">
                                        {navigationLinks.map((link) => (
                                            <motion.div
                                                key={link.id}
                                                variants={linkVars}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={(e) =>
                                                        handleLinkClick(
                                                            e,
                                                            link.href
                                                        )
                                                    }
                                                    className={`flex items-center space-x-4 p-4 rounded-xl transition-colors group ${
                                                        activeSection ===
                                                        link.href.replace(
                                                            "#",
                                                            ""
                                                        )
                                                            ? "bg-blue-50"
                                                            : "hover:bg-gray-50"
                                                    }`}
                                                >
                                                    <span
                                                        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                                                            activeSection ===
                                                            link.href.replace(
                                                                "#",
                                                                ""
                                                            )
                                                                ? "bg-blue-100 text-blue-600"
                                                                : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                                                        }`}
                                                    >
                                                        {link.icon}
                                                    </span>
                                                    <span
                                                        className={
                                                            activeSection ===
                                                            link.href.replace(
                                                                "#",
                                                                ""
                                                            )
                                                                ? "text-blue-600"
                                                                : "text-gray-700 group-hover:text-blue-600"
                                                        }
                                                    >
                                                        {link.label}
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>

                                    {/* Mobile Auth Buttons */}
                                    <div className="mt-6 space-y-3">
                                        <Button
                                            href="/inscription"
                                            variant="secondary"
                                            fullWidth
                                        >
                                            Inscription
                                        </Button>
                                        <Button
                                            href="/connexion"
                                            variant="primary"
                                            fullWidth
                                        >
                                            Connexion
                                        </Button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
