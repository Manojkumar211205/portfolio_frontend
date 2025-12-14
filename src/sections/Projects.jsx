import React, { useEffect, useState } from 'react';
import TiltedCard from '../components/TiltedCard';
import { fetchProjects } from '../api';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchProjects();
            setProjects(data);
            setLoading(false);
        };
        loadData();
    }, []);

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
                    Featured <span className="text-secondary">Projects</span>
                </h2>

                {loading ? (
                    <div className="text-center text-white">Loading Projects...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 justify-items-center">
                        {projects.map((project, index) => (
                            <TiltedCard key={index} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
