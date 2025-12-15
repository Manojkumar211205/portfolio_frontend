import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchTimeline } from '../api';
import Stack from '../components/Stack';

const CareerTimeline = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [timelineData, setTimelineData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleExpand = async () => {
        if (!isOpen) {
            setLoading(true);
            const data = await fetchTimeline();
            setTimelineData(data);
            setLoading(false);
        }
        setIsOpen(!isOpen);
    };

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        } catch (e) {
            return dateString;
        }
    };

    return (
        <section id="timeline" className="relative py-20 px-6 sm:px-12 bg-transparent min-h-[300px] flex flex-col items-center">
            {/* Expansion Button */}
            <motion.button
                onClick={handleExpand}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-cyan-400 border-2 border-cyan-400/50 rounded-full bg-black/50 backdrop-blur-md overflow-hidden transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative font-mono z-10">
                    {isOpen ? 'return 0;' : 'def commit_history(career):'}
                </span>
                {!isOpen && (
                    <motion.div
                        className="absolute bottom-0 h-1 bg-cyan-400 w-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                )}
            </motion.button>

            {/* Timeline Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-full max-w-5xl mt-16 relative overflow-hidden"
                    >
                        {/* Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12 md:space-y-24 relative py-12">
                            {timelineData.map((event, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        {/* Spacer for proper zigzag alignment */}
                                        <div className="w-full md:w-1/2" />

                                        {/* Connector Dot */}
                                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10 hidden md:block">
                                            <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-25"></div>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`w-full md:w-1/2 relative px-4 md:px-12 ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                                            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl hover:border-cyan-500/30 transition-colors group">

                                                {/* Date Badge */}
                                                <div className={`inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full mb-3 border border-cyan-500/20 ${isEven ? 'md:ml-auto' : ''}`}>
                                                    {formatDate(event.date)}
                                                </div>

                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                    {event.title}
                                                </h3>

                                                <p className="text-gray-400 mb-6 font-light leading-relaxed">
                                                    {event.description}
                                                </p>

                                                {/* Images Stack */}
                                                {event.images && event.images.length > 0 && (
                                                    <div className={`w-full h-64 md:h-56 my-6 ${isEven ? 'md:ml-auto' : ''} max-w-sm mx-auto md:mx-0`}>
                                                        <Stack
                                                            cards={event.images.map((img, i) => (
                                                                <img
                                                                    key={i}
                                                                    src={img}
                                                                    alt={`${event.title}-${i}`}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            ))}
                                                            randomRotation={true}
                                                            sensitivity={150}
                                                            sendToBackOnClick={true}
                                                        />
                                                    </div>
                                                )}

                                                {event.link && (
                                                    <a
                                                        href={event.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
                                                    >
                                                        View Details
                                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Footer Line */}
                        <div className="absolute left-1/2 bottom-0 w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent -translate-x-1/2 hidden md:block"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CareerTimeline;
