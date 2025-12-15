import React from 'react';
import { motion } from 'framer-motion';

const skillIcons = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    threejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    // New Skills
    pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", // Using PostgreSQL as SQL rep
    agenticai: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", // Using TensorFlow for Agentic AI
    dataanalytics: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", // Using Pandas for Data Analytics
};

const LogoLoop = ({ items = [] }) => {
    // Ensure we have enough items for a smooth loop, regardless of input length.
    // 10 reps ensures coverage even for small arrays.
    // For large arrays (>20), 2 reps is usually enough, but 4 is safe.
    const repeatCount = items.length < 5 ? 10 : items.length < 10 ? 6 : 4;
    const loopedItems = Array(repeatCount).fill(items).flat();

    // Helper to match flexible keys
    const getIcon = (name) => {
        const key = name.toLowerCase().replace(/[\s\.]/g, '');
        return skillIcons[key] || null;
    };

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
                className="flex gap-12 w-max"
                animate={{ x: [0, -1000] }} // Adjust depending on width
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 15, // Faster loop
                        ease: "linear",
                    },
                }}
                whileHover={{ scale: 0.95, opacity: 0.8, transition: { duration: 0.3 } }}
            >
                {loopedItems.map((item, index) => {
                    const iconUrl = getIcon(item);
                    return (
                        <div key={index} className="flex flex-col items-center gap-3 group min-w-[100px]">
                            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                {iconUrl ? (
                                    <img src={iconUrl} alt={item} className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                                ) : (
                                    <span className="text-xl font-bold text-heading group-hover:text-primary transition-colors">
                                        {item.substring(0, 2).toUpperCase()}
                                    </span>
                                )}
                            </div>
                            <span className="text-sm font-medium text-heading group-hover:text-white transition-colors uppercase tracking-wider">{item}</span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default LogoLoop;
