'use client';

import { Hero as StorybookHero } from '../../lib/stories/organisms/heroes/Hero';

export const Hero = () => {
  return (
    <StorybookHero
      imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop"
      imageAlt="Modern workspace with plants"
      imageHeading="Welcome to JudgeDice v7"
      imageSubtext="Building the future of web development"
      contentHeading="Full-Stack Developer & Designer"
      contentSubtext="Specializing in modern web technologies, creating beautiful and functional applications that make a difference."
      ctaText="View Projects"
      ctaBorder={true}
      layout="image-left"
      darkBgColor="#1a3b3a"
    />
  );
}; 