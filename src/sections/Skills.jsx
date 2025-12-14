import React from 'react';
import LogoLoop from '../components/LogoLoop';

const Skills = ({ skills = [] }) => {
    return (
        <section id="skills" className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
                    Skills & <span className="text-primary">Technologies</span>
                </h2>

                {skills.length > 0 ? (
                    <LogoLoop items={skills} />
                ) : (
                    <div className="text-center text-muted">No skills data available.</div>
                )}
            </div>
        </section>
    );
};

export default Skills;
