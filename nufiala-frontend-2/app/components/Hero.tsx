"use client";

import { motion } from "motion/react";
import Button from "./buttons/Button";

const Hero = () => {
    return (
        <section
            id="hero"
            className="section relative overflow-hidden bg-gradient-to-br from-blue-50 to-white"
        >
            {/* Content Container */}
            <div className="section-container">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content with Motion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 z-20 text-center lg:text-left relative"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-gray-900 mb-6 leading-tight mx-auto lg:mx-0"
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
                            className="text-[clamp(1rem,2.5vw,1.5rem)] text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
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
                    <div className="relative w-full lg:w-1/2 h-[500px] md:h-[600px] -mt-[300px] lg:mt-0 z-10">
                        {/* Book Shape */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[40%] left-[10%] lg:top-[10%] w-20 h-24 md:w-32 md:h-40 bg-blue-500/40 backdrop-blur-sm rounded-lg flex items-center justify-center transform-gpu shadow-xl"
                        >
                            <div className="w-16 h-20 md:w-24 md:h-32 border-r-8 border-white/50 rounded-r-lg"></div>
                        </motion.div>

                        {/* Mathematical Symbols */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[60%] right-[15%] lg:top-[30%] w-24 h-24 md:w-36 md:h-36 bg-purple-500/40 backdrop-blur-sm rounded-full flex items-center justify-center transform-gpu shadow-xl"
                        >
                            <span className="text-white text-3xl md:text-5xl font-bold">
                                ∑
                            </span>
                        </motion.div>

                        {/* Atom Shape */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-[5%] left-[20%] lg:bottom-[15%] transform-gpu"
                        >
                            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-8 border-green-400/40 backdrop-blur-sm relative shadow-xl">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute w-full h-3 md:h-4 bg-green-400/40 top-1/2 left-0 transform -translate-y-1/2 rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute w-full h-3 md:h-4 bg-green-400/40 top-1/2 left-0 transform -translate-y-1/2 rounded-full"
                                    style={{ rotate: 90 }}
                                />
                            </div>
                        </motion.div>

                        {/* Paint Palette */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[25%] right-[25%] lg:top-[5%] w-24 h-24 md:w-36 md:h-36 bg-indigo-500/40 backdrop-blur-sm rounded-full transform-gpu shadow-xl"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-3 left-3 md:top-4 md:left-4 w-6 h-6 md:w-8 md:h-8 bg-pink-500/60 rounded-full"
                            />
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-yellow-500/60 rounded-full"
                            />
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-6 h-6 md:w-8 md:h-8 bg-green-500/60 rounded-full"
                            />
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-500/60 rounded-full"
                            />
                        </motion.div>

                        {/* Code Brackets */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-[15%] right-[10%] lg:bottom-[25%] w-20 h-20 md:w-32 md:h-32 bg-blue-600/40 backdrop-blur-sm rounded-lg flex items-center justify-center transform-gpu shadow-xl"
                        >
                            <span className="text-white text-2xl md:text-4xl font-mono">{`{ }`}</span>
                        </motion.div>

                        {/* Floating Particles */}
                        {[...Array(30)].map((_, i) => {
                            const isActive = i < 10; // First 10 particles will have more pronounced motion
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: isActive
                                            ? [0.3, 0.6, 0.3]
                                            : [0.2, 0.4, 0.2],
                                        scale: isActive
                                            ? [0.8, 1.2, 0.8]
                                            : [0.8, 1, 0.8],
                                        y: isActive
                                            ? ["0%", "150%", "0%"]
                                            : ["0%", "100%", "0%"],
                                        x: isActive
                                            ? [
                                                  "0%",
                                                  i % 2 === 0 ? "75%" : "-75%",
                                                  i % 3 === 0 ? "50%" : "-50%",
                                                  "0%",
                                              ]
                                            : [
                                                  "0%",
                                                  i % 2 === 0 ? "50%" : "-50%",
                                                  i % 3 === 0 ? "25%" : "-25%",
                                                  "0%",
                                              ],
                                        rotate: isActive ? [0, 720] : [0, 360],
                                    }}
                                    transition={{
                                        duration: isActive
                                            ? 6 + Math.random() * 4
                                            : 8 + Math.random() * 5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        delay: i * 0.1,
                                        ease: "linear",
                                    }}
                                    className={`absolute w-2 h-2 md:w-3 md:h-3 rounded-full backdrop-blur-sm ${
                                        isActive
                                            ? "bg-blue-500/40"
                                            : "bg-blue-500/30"
                                    }`}
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                />
                            );
                        })}

                        {/* Connecting Lines */}
                        <svg
                            className="absolute inset-0 w-full h-full"
                            style={{ pointerEvents: "none" }}
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M100,100 Q200,150 300,200 T500,300"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
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
