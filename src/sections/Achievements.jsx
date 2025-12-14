import React, { useEffect, useState } from 'react';
import ScrollStack from '../components/ScrollStack';
import { fetchAchievements } from '../api';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchAchievements();
            setAchievements(data);
            setLoading(false);
        };
        loadData();
    }, []);

    return (
        <section id="achievements" className="py-20 relative z-10 min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
                    <span className="text-primary">Achievements</span> & Certifications
                </h2>

                {loading ? (
                    <div className="text-center text-white">Loading Achievements...</div>
                ) : (
                    <ScrollStack achievements={achievements} />
                )}
            </div>
        </section>
    );
};

export default Achievements;
