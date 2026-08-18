/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturePillStrip } from "./components/FeaturePillStrip";
import { FloatingToolsBar } from "./components/FloatingToolsBar";
import { AboutSection } from "./components/AboutSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { StudentResultsSection } from "./components/StudentResultsSection";
import { WhatWeTeachSection } from "./components/WhatWeTeachSection";
import { StudentShowcaseSection } from "./components/StudentShowcaseSection";
import { InstructorsSection } from "./components/InstructorsSection";
import { AcademyLifeSection } from "./components/AcademyLifeSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ImpactSection } from "./components/ImpactSection";
import { SocialSection } from "./components/SocialSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { StickyBottomBar } from "./components/StickyBottomBar";
import { AIAssistantWidget } from "./components/AIAssistantWidget";
import { VideoModal } from "./components/VideoModal";
import { AuthModal } from "./components/AuthModal";
import { StudentDashboard } from "./components/StudentDashboard";
import { ShowcaseVideo, StudentUser } from "./types";
import { SHOWCASE_VIDEOS } from "./data/academyData";
import { getCurrentUser } from "./lib/supabase";

export default function App() {
  const [isAiChatOpen, setIsAiChatOpen] = useState<boolean>(false);
  const [activeModalVideo, setActiveModalVideo] = useState<ShowcaseVideo | null>(null);
  const [currentUser, setCurrentUser] = useState<StudentUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
  }, []);

  const handleWatchFeaturedReel = () => {
    setActiveModalVideo(SHOWCASE_VIDEOS[0]);
  };

  const handleStartLearning = () => {
    if (currentUser) {
      setIsDashboardOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = (user: StudentUser) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    setIsDashboardOpen(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsDashboardOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-cyan-500 selection:text-black font-sans relative overflow-x-hidden pb-12">
      {/* Top Sticky Header */}
      <Navbar
        onOpenAiChat={() => setIsAiChatOpen(true)}
        onStartLearning={handleStartLearning}
        currentUser={currentUser}
        onOpenDashboard={() => setIsDashboardOpen(true)}
      />

      {/* 1. Hero Section */}
      <main>
        <HeroSection
          onWatchReel={handleWatchFeaturedReel}
          onOpenAiChat={() => setIsAiChatOpen(true)}
          onStartLearning={handleStartLearning}
        />

        {/* 2. Feature Pill Capsule Strip */}
        <FeaturePillStrip />

        {/* 3. Floating Tool Software Icons Bar */}
        <FloatingToolsBar />

        {/* 4. About Stars Academy */}
        <AboutSection />

        {/* 5. Why Stars Academy */}
        <WhyUsSection />

        {/* 6. Student Results & Before/After Slider */}
        <StudentResultsSection />

        {/* 7. What We Teach (Mastery Tracks) */}
        <WhatWeTeachSection onStartLearning={handleStartLearning} />

        {/* 8. Student Showcase & Featured Reel Embed */}
        <StudentShowcaseSection onPlayVideo={(video) => setActiveModalVideo(video)} />

        {/* 9. Our Instructors */}
        <InstructorsSection />

        {/* 10. Academy Life */}
        <AcademyLifeSection />

        {/* 11. Testimonials */}
        <TestimonialsSection />

        {/* 12. Our Impact Animated Stat Counters */}
        <ImpactSection />

        {/* 13. Social Media Channels */}
        <SocialSection />

        {/* 14. Contact / Join Stars Academy */}
        <ContactSection onStartLearning={handleStartLearning} />
      </main>

      {/* 15. Footer */}
      <Footer onStartLearning={handleStartLearning} />

      {/* 16. Persistent Sticky Bottom Bar */}
      <StickyBottomBar onStartLearning={handleStartLearning} />

      {/* 17. Built-in AI Assistant Chat Widget */}
      <AIAssistantWidget
        isOpen={isAiChatOpen}
        onToggle={() => setIsAiChatOpen(!isAiChatOpen)}
      />

      {/* 18. Video Player Modal Lightbox */}
      <VideoModal
        video={activeModalVideo}
        onClose={() => setActiveModalVideo(null)}
      />

      {/* 19. Authentication Modal (Supabase Auth: Sign Up / Sign In / Google) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      {/* 20. Student Submission Dashboard Portal */}
      {currentUser && isDashboardOpen && (
        <StudentDashboard
          user={currentUser}
          onClose={() => setIsDashboardOpen(false)}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
