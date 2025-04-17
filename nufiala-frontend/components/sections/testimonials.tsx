"use client";
import { useTranslation } from "react-i18next";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TestimonialsSection() {
    const { t } = useTranslation();

    const testimonials = [
        {
            quote: "Ce service a changé ma vie pour le mieux !",
            name: "John Doe",
            designation: "Ingénieur logiciel",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote: "Je ne peux pas croire à quel point il était facile de trouver le bon tuteur !",
            name: "Jane Smith",
            designation: "Responsable marketing",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote: "Je recommande vivement à quiconque cherchant une éducation de qualité !",
            name: "Michael Johnson",
            designation: "Designer de produit",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <section
            id="testimonials"
            className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {t("landing.testimonials.title")}
                    </h2>
                    <AnimatedTestimonials testimonials={testimonials} />
                </div>
            </div>
        </section>
    );
}
