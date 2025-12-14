import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ socialMedia }) => {
    return (
        <footer className="py-12 bg-black/50 backdrop-blur border-t border-white/5 relative z-10">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6">
                <div className="flex gap-8">
                    {socialMedia?.github && (
                        <a href={socialMedia.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white hover:scale-110 transition-all">
                            <Github size={24} />
                        </a>
                    )}
                    {socialMedia?.linkedin && (
                        <a href={socialMedia.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-white hover:scale-110 transition-all">
                            <Linkedin size={24} />
                        </a>
                    )}
                    <a href="mailto:hello@example.com" className="text-muted hover:text-white hover:scale-110 transition-all">
                        <Mail size={24} />
                    </a>
                </div>

                <p className="text-muted text-sm">
                    © {new Date().getFullYear()} Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
