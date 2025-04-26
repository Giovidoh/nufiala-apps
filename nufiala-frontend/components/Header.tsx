"use client";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function Header() {
    const { t } = useTranslation();
    const [activeLink, setActiveLink] = useState<string>("hero");
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { id: "hero", label: t("landing.cta.take_course") },
        { id: "features", label: t("landing.features.title") },
        { id: "how-it-works", label: t("landing.how_it_works.title") },
        { id: "testimonials", label: t("landing.testimonials.title") },
    ];

    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (const item of navItems) {
                const section = document.getElementById(item.id);
                if (
                    section &&
                    section.offsetTop <= scrollPosition &&
                    section.offsetTop + section.offsetHeight > scrollPosition
                ) {
                    setActiveLink(item.id);
                    break;
                }
            }
        };

        handleScroll(); // Set initial active link
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setMenuOpen(false); // Close menu on navigation
        }
    };

    return (
        <motion.header
            style={{ opacity: headerOpacity }}
            className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b h-16"
        >
            <div className="container mx-auto flex h-full items-center justify-between px-4">
                <h1 className="text-xl font-bold">{t("landing.header.logo")}</h1>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <Button key={item.id} variant="ghost" asChild>
                            <motion.button
                                onClick={() => scrollToSection(item.id)}
                                className={`cursor-pointer px-4 py-2 ${
                                    activeLink === item.id
                                        ? "text-primary font-medium bg-accent/50"
                                        : "text-muted-foreground hover:bg-accent"
                                }`}
                            >
                                {item.label}
                            </motion.button>
                        </Button>
                    ))}
                </nav>
                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <motion.nav
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden bg-background border-t border-border"
                    aria-label="Mobile menu"
                >
                    <div className="flex flex-col space-y-1 p-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full text-left px-4 py-2 rounded-md ${
                                    activeLink === item.id
                                        ? "text-primary font-medium bg-accent/50"
                                        : "text-muted-foreground hover:bg-accent"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </motion.nav>
            )}
        </motion.header>
    );
}
