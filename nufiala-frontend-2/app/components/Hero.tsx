"use client";

import { motion } from "motion/react";
import Button from "./buttons/Button";

const Hero = () => {
    return (
        <section
            id="hero"
            className="h-fit relative overflow-hidden bg-gradient-to-br from-blue-50 to-white"
        >
            {/* Content Container */}
            <div className="container mx-auto px-4 pt-24 lg:pt-32">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content with Motion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 z-10 text-center lg:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight mx-auto"
                        >
                            Apprenez et Partagez
                            <br />
                            <span className="text-blue-600">
                                Vos Connaissances
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            Découvrez une nouvelle façon d'apprendre et
                            d'enseigner. Rejoignez notre communauté d'apprenants
                            et d'enseignants passionnés.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button href="#courses" variant="primary" size="lg">
                                Prendre un cours
                            </Button>
                            <Button href="#teach" variant="secondary" size="lg">
                                Donner des cours
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Animated Shapes with Motion */}
                    <div className="w-full lg:w-1/2 h-[600px] relative">
                        {/* Book Shape */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="absolute top-[10%] left-[10%] w-32 h-40 bg-blue-500/40 backdrop-blur-sm rounded-lg flex items-center justify-center transform-gpu shadow-xl"
                        >
                            <div className="w-24 h-32 border-r-8 border-white/50 rounded-r-lg"></div>
                        </motion.div>

                        {/* Mathematical Symbols */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="absolute top-[30%] right-[15%] w-36 h-36 bg-purple-500/40 backdrop-blur-sm rounded-full flex items-center justify-center transform-gpu shadow-xl"
                        >
                            <span className="text-white text-5xl font-bold">
                                ∑
                            </span>
                        </motion.div>

                        {/* Atom Shape */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            whileHover={{ scale: 1.1 }}
                            className="absolute bottom-[15%] left-[20%] transform-gpu"
                        >
                            <div className="w-40 h-40 rounded-full border-8 border-green-400/40 backdrop-blur-sm relative shadow-xl">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute w-full h-4 bg-green-400/40 top-1/2 left-0 transform -translate-y-1/2 rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute w-full h-4 bg-green-400/40 top-1/2 left-0 transform -translate-y-1/2 rounded-full"
                                    style={{ rotate: 90 }}
                                />
                            </div>
                        </motion.div>

                        {/* Paint Palette */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="absolute top-[5%] right-[25%] w-36 h-36 bg-indigo-500/40 backdrop-blur-sm rounded-full transform-gpu shadow-xl"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="absolute top-4 left-4 w-8 h-8 bg-pink-500/60 rounded-full"
                            />
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="absolute top-4 right-4 w-8 h-8 bg-yellow-500/60 rounded-full"
                            />
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="absolute bottom-4 left-4 w-8 h-8 bg-green-500/60 rounded-full"
                            />
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500/60 rounded-full"
                            />
                        </motion.div>

                        {/* Code Brackets */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            whileHover={{ scale: 1.1 }}
                            className="absolute bottom-[25%] right-[10%] w-32 h-32 bg-blue-600/40 backdrop-blur-sm rounded-lg flex items-center justify-center transform-gpu shadow-xl"
                        >
                            <span className="text-white text-4xl font-mono">{`{ }`}</span>
                        </motion.div>

                        {/* Floating Particles */}
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: 0.4,
                                    scale: 1,
                                    y: ["0%", "100%"],
                                    x: ["0%", i % 2 === 0 ? "50%" : "-50%"],
                                }}
                                transition={{
                                    duration: 10 + Math.random() * 10,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: i * 0.2,
                                }}
                                className="absolute w-4 h-4 rounded-full bg-blue-500/30"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                            />
                        ))}

                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M100,100 Q200,150 300,200 T500,300"
                                stroke="url(#lineGradient)"
                                strokeWidth="3"
                                fill="none"
                                className="opacity-30"
                            />
                            <defs>
                                <linearGradient
                                    id="lineGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="rgba(59, 130, 246, 0.5)"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="rgba(147, 51, 234, 0.5)"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-30 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
