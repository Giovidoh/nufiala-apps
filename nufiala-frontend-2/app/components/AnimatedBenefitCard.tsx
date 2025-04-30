"use client";

import { useEffect, useRef } from "react";

interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const AnimatedBenefitCard = ({
    icon,
    title,
    description,
}: BenefitCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className="benefit-card opacity-0 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {title}
            </h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default AnimatedBenefitCard;
