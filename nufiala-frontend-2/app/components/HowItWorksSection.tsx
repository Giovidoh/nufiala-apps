"use client";

import { motion } from "motion/react";

interface StepCardProps {
    number: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    isLast?: boolean;
}

const StepCard = ({
    number,
    title,
    description,
    icon,
    features,
    isLast = false,
}: StepCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: number * 0.2 }}
            className="relative flex items-start"
        >
            <div className="flex flex-col items-center">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold z-10"
                >
                    {number}
                </motion.div>
                {!isLast && (
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: number * 0.2 }}
                        className="absolute left-6 top-12 w-0.5 bg-blue-200 transform -translate-x-1/2"
                        style={{ height: "calc(100% - 3rem)" }}
                    />
                )}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: number * 0.3 }}
                className="ml-8 flex-1"
            >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4"
                        >
                            {icon}
                        </motion.div>
                        <div>
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: number * 0.4 }}
                        className="space-y-2"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                className="flex items-center text-gray-700"
                            >
                                <motion.svg
                                    whileHover={{ scale: 1.2 }}
                                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </motion.svg>
                                <span>{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const HowItWorksSection = () => {
    const steps = [
        {
            number: 1,
            title: "Trouvez votre professeur idéal",
            description:
                "Parcourez nos profils d'enseignants qualifiés et choisissez celui qui correspond le mieux à vos besoins.",
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
            features: [
                "Filtres de recherche avancés",
                "Profils détaillés des enseignants",
                "Avis et évaluations",
            ],
        },
        {
            number: 2,
            title: "Réservez votre première séance",
            description:
                "Planifiez votre première séance d'essai et commencez votre parcours d'apprentissage en toute simplicité.",
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                    <circle cx="12" cy="14" r="2" strokeWidth="1.5" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 12v-2"
                    />
                </svg>
            ),
            features: [
                "Première séance à tarif réduit",
                "Horaires flexibles",
                "Confirmation instantanée",
            ],
        },
        {
            number: 3,
            title: "Apprenez et progressez",
            description:
                "Bénéficiez d'un suivi personnalisé et atteignez vos objectifs d'apprentissage.",
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
            ),
            features: [
                "Suivi de progression",
                "Ressources pédagogiques",
                "Support continu",
            ],
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Comment ça marche ?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Découvrez en trois étapes simples comment commencer
                        votre parcours d'apprentissage avec Nufiala.
                    </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                            features={step.features}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default HowItWorksSection;
