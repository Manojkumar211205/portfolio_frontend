import React, { useEffect, useState } from 'react';
import PillNav from './components/PillNav';
import LiquidChrome from './components/LiquidChrome';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Footer from './sections/Footer';
import { fetchProfile } from './api';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const data = await fetchProfile();
      // Use fallback if api fails (since backend might not be running)
      if (!data) {
        setProfile({
          profilePic: "https://github.com/shadcn.png",
          name: "Manoj Kumar",
          bio: "Full Stack Developer passionate about building interactive modern web applications.",
          skills: ["React", "JavaScript", "Python", "Node.js", "Tailwind CSS", "GSAP", "MongoDB", "Framer Motion"],
          socialMedia: {
            github: "https://github.com",
            linkedin: "https://linkedin.com"
          }
        });
      } else {
        setProfile(data);
      }
    };
    loadProfile();
  }, []);

  return (
    <div className="font-sans text-white min-h-screen">
      <LiquidChrome />
      <PillNav />

      <main className="flex flex-col gap-0">
        <Hero profile={profile} />
        <Skills skills={profile?.skills} />
        <Projects />
        <Achievements />
      </main>

      <Footer socialMedia={profile?.socialMedia} />
    </div>
  );
}

export default App;
