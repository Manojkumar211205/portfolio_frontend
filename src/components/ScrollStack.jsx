import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollStack = ({ achievements = [] }) => {
    return (
        <div className="relative w-full max-w-4xl mx-auto py-20 flex flex-col gap-8">
            {achievements.map((item, index) => (
                <StickyCard key={index} item={item} index={index} total={achievements.length} />
            ))}
        </div>
    );
};

const StickyCard = ({ item, index, total }) => {
    // Simple sticky positioning
    return (
        <div
            className="sticky top-24 w-full bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-md flex flex-col md:flex-row gap-8 items-center"
            style={{
                top: `calc(6rem + ${index * 1.5}rem)`,
                zIndex: index + 1,
                // Visual stacking effect
                marginBottom: `${(total - index - 1) * 2}rem`
            }}
        >
            <div className="w-full md:w-1/3 aspect-[4/3] bg-black/50 rounded-lg overflow-hidden border border-white/5">
                <img
                    src={item.certificateImg || 'https://via.placeholder.com/300?text=Certificate'}
                    alt={item.achievement}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-2xl font-bold text-heading mb-2">{item.achievement}</h3>
                <p className="text-foreground mb-6">{item.description}</p>

                {item.certificateLink && (
                    <a
                        href={item.certificateLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-secondary/30 text-secondary transition-all"
                    >
                        View Certificate
                    </a>
                )}
            </div>

            <div className="absolute top-4 right-4 text-6xl font-black text-white/5 pointer-events-none select-none">
                0{index + 1}
            </div>
        </div>
    );
};

export default ScrollStack;
