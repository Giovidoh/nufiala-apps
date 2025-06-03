"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
    rating: number;
    course: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Marie Laurent",
        role: "Étudiante en Master",
        image: "/testimonials/student1.jpg", // You'll need to add these images
        content:
            "Les cours particuliers m'ont permis de rattraper mon retard en mathématiques. Mon professeur a su adapter son approche à mes besoins spécifiques. Je recommande vivement !",
        rating: 5,
        course: "Mathématiques Avancées",
    },
    {
        id: 2,
        name: "Thomas Dubois",
        role: "Professionnel en Reconversion",
        image: "/testimonials/student2.jpg",
        content:
            "Grâce à la flexibilité des horaires et la qualité des cours, j'ai pu me reconvertir dans le développement web tout en continuant mon activité professionnelle.",
        rating: 5,
        course: "Développement Web",
    },
    {
        id: 3,
        name: "Sophie Martin",
        role: "Lycéenne",
        image: "/testimonials/student3.jpg",
        content:
            "J'ai pu améliorer considérablement mes notes en physique-chimie. Les explications étaient claires et les exercices pratiques très utiles.",
        rating: 5,
        course: "Physique-Chimie",
    },
    {
        id: 4,
        name: "Lucas Moreau",
        role: "Étudiant en Licence",
        image: "/testimonials/student4.jpg",
        content:
            "L'accompagnement personnalisé m'a permis de mieux comprendre les concepts complexes en économie. Une expérience très enrichissante !",
        rating: 5,
        course: "Économie",
    },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <motion.div
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Rating */}
            <motion.div
                className="flex mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {[...Array(5)].map((_, i) => (
                    <motion.svg
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className={`w-5 h-5 ${
                            i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                ))}
            </motion.div>

            {/* Content */}
            <motion.p
                className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-600 mb-6 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                "{testimonial.content}"
            </motion.p>

            {/* User Info */}
            <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-[clamp(1.25rem,2vw,1.5rem)] font-bold">
                    {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                    <h4 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-gray-900">
                        {testimonial.name}
                    </h4>
                    <div className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-gray-500">
                        {testimonial.role}
                    </div>
                    <div className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-blue-600 mt-1">
                        {testimonial.course}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % testimonials.length);
            }, 5000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying]);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <section
            id="testimonials"
            className="section bg-gray-50 overflow-hidden"
        >
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 mb-4">
                        Ce Que Disent Nos Élèves
                    </h2>
                    <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 max-w-2xl mx-auto">
                        Découvrez les expériences de nos étudiants et leurs
                        parcours de réussite
                    </p>
                </motion.div>

                {/* Testimonials Slider */}
                <div className="max-w-6xl mx-auto px-12">
                    {/* Slider Container */}
                    <div className="relative min-h-[400px] md:min-h-[200px] flex items-center justify-center px-4 md:px-12">
                        {" "}
                        {/* Fixed height container */}
                        <AnimatePresence initial={false} custom={currentSlide}>
                            <motion.div
                                key={currentSlide}
                                custom={currentSlide}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    },
                                    opacity: { duration: 0.2 },
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(
                                        offset.x,
                                        velocity.x
                                    );
                                    if (swipe < -swipeConfidenceThreshold) {
                                        handleSlideChange(
                                            (currentSlide + 1) %
                                                testimonials.length
                                        );
                                    } else if (
                                        swipe > swipeConfidenceThreshold
                                    ) {
                                        handleSlideChange(
                                            (currentSlide -
                                                1 +
                                                testimonials.length) %
                                                testimonials.length
                                        );
                                    }
                                }}
                                className="absolute w-full flex justify-center"
                            >
                                <TestimonialCard
                                    testimonial={testimonials[currentSlide]}
                                />
                            </motion.div>
                        </AnimatePresence>
                        {/* Navigation Buttons */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                                handleSlideChange(
                                    (currentSlide - 1 + testimonials.length) %
                                        testimonials.length
                                )
                            }
                            className="absolute -left-14 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none z-10"
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
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                                handleSlideChange(
                                    (currentSlide + 1) % testimonials.length
                                )
                            }
                            className="absolute -right-14 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none z-10"
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
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Dots Navigation */}
                    <motion.div
                        className="flex justify-center space-x-2 mt-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                onClick={() => handleSlideChange(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? "bg-blue-600 w-8"
                                        : "bg-gray-300"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </motion.div>

                    {/* Auto-play Toggle */}
                    <motion.div
                        className="text-center mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="text-sm text-gray-500 hover:text-blue-600 focus:outline-none"
                        >
                            {isAutoPlaying ? "Pause" : "Lecture automatique"}
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
