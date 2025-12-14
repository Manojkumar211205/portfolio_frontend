import React from 'react';
import { motion } from 'framer-motion';

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
];

const PillNav = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="fixed top-6 right-6 md:right-10 z-50 bg-[rgba(11,11,11,0.75)] backdrop-blur-xl border border-primary/20 rounded-full px-8 py-3 flex gap-8 shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 min-w-[300px] md:min-w-[500px] justify-center"
        >
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-sm font-medium text-[#A1A1AA] hover:text-[#22D3EE] transition-colors relative group flex flex-col items-center gap-1"
                >
                    {section.label}
                    <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            ))}
        </motion.div>
    );
};

export default PillNav;
