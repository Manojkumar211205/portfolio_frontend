import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Phone } from 'lucide-react';
import TextType from '../components/TextType';

const Hero = ({ profile }) => {
    if (!profile) return <div className="h-screen flex items-center justify-center text-white">Loading Profile...</div>;

    return (
        <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
            {/* Card Container */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-6xl bg-black/30 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24 shadow-2xl mx-4"
            >
                {/* Left: Profile Pic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group shrink-0"
                >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/40 transition-colors duration-500" />
                    <img
                        src={profile.profilePic || 'https://via.placeholder.com/300'}
                        alt="Profile"
                        className="relative w-48 h-48 md:w-80 md:h-80 rounded-full border-4 border-white/5 object-cover shadow-2xl z-10"
                    />
                </motion.div>

                {/* Right: Text */}
                <div className="flex-1 text-center md:text-left pt-2 md:pt-0">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-secondary font-medium tracking-wide mb-4 text-base md:text-lg uppercase"
                    >
                        Welcome Developers 😎
                    </motion.p>

                    <div className="h-20 mb-2">
                        <TextType
                            texts={[`I'm ${profile.name || 'Manoj Kumar'}`, "AI Developer"]}
                            className="bg-gradient-to-r from-primary to-[#A78BFA] bg-clip-text text-transparent"
                        />
                    </div>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-foreground/80 max-w-xl mx-auto md:mx-0 text-base font-normal leading-relaxed mb-6 max-h-[100px] overflow-y-auto pr-2 custom-scrollbar"
                    >
                        {profile.bio || "Building digital experiences with code and creativity."}
                    </motion.p>

                    {/* Social Links inside Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap justify-center md:justify-start gap-4"
                    >
                        {profile.socialMedia?.github && (
                            <a href={profile.socialMedia.github} target="_blank" rel="noreferrer" className="text-muted hover:text-primary hover:scale-110 transition-all p-3 bg-white/5 rounded-full border border-white/5">
                                <Github size={24} />
                            </a>
                        )}
                        {profile.socialMedia?.linkedin && (
                            <a href={profile.socialMedia.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-primary hover:scale-110 transition-all p-3 bg-white/5 rounded-full border border-white/5">
                                <Linkedin size={24} />
                            </a>
                        )}

                        {profile.socialMedia?.email && (
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.socialMedia.email}`} target="_blank" rel="noreferrer" className="text-muted hover:text-primary hover:scale-110 transition-all p-3 bg-white/5 rounded-full border border-white/5">
                                <Mail size={24} />
                            </a>
                        )}

                        {/* Phone Button with Expand Effect */}
                        {profile.socialMedia?.phone && (
                            <div className="relative group flex items-center">
                                <a
                                    href={`tel:${profile.socialMedia.phone}`}
                                    className="flex items-center gap-2 text-muted hover:text-primary transition-all p-3 bg-white/5 rounded-full border border-white/5 group-hover:pr-6 group-hover:w-auto w-12 overflow-hidden whitespace-nowrap"
                                >
                                    <Phone size={24} className="shrink-0" />
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0 font-medium">
                                        {profile.socialMedia.phone}
                                    </span>
                                </a>
                            </div>
                        )}

                        {/* Resume Download Button */}
                        {profile.resumeUrl && (
                            <a
                                href={profile.resumeUrl}
                                download="Resume.pdf"
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/80 to-[#A78BFA]/80 hover:from-primary hover:to-[#A78BFA] text-white rounded-full font-semibold shadow-lg hover:shadow-primary/50 transition-all hover:-translate-y-1 ml-2"
                            >
                                <FileText size={20} />
                                <span>Download Resume</span>
                            </a>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
export default Hero;
