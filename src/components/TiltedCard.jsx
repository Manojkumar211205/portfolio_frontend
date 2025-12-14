import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const TiltedCard = ({ project }) => {
    const ref = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXVal = ((y - centerY) / centerY) * -10; // Invert tilt
        const rotateYVal = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXVal);
        setRotateY(rotateYVal);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="w-full"
        >
            <motion.div
                animate={{ rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group rounded-xl overflow-hidden bg-surface border border-white/5 shadow-xl hover:shadow-primary/20 aspect-[4/5] flex flex-col justify-end p-6"
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

                {/* Project Image Background (simulated) */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.projectImg || 'https://via.placeholder.com/600x400'})` }}
                />

                {/* Content */}
                <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-heading mb-2">{project.name}</h3>
                    <p className="text-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.techUsed.map(tech => (
                            <span key={tech} className="text-xs px-2 py-1 rounded bg-white/10 text-primary border border-primary/20">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                        {project.projectLinks?.github && (
                            <a href={project.projectLinks.github} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                        {project.projectLinks?.live && (
                            <a href={project.projectLinks.live} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TiltedCard;
