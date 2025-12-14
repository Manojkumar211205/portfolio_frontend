import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TextType = ({ texts, speed = 150, delay = 1000, className = "text-primary" }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleType = () => {
            const fullText = texts[currentTextIndex];

            setDisplayedText(prev =>
                isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
            );

            // Typing finished
            if (!isDeleting && displayedText === fullText) {
                setTimeout(() => setIsDeleting(true), delay);
            }
            // Deleting finished
            else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, texts, currentTextIndex, speed, delay]);

    return (
        <span className={`font-mono text-xl md:text-3xl font-bold ${className}`}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-6 md:h-8 bg-secondary ml-1 align-middle"
            />
        </span>
    );
};

export default TextType;
