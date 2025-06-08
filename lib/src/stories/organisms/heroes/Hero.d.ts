import React from 'react';
import './hero-css-styles.css';
export interface HeroProps {
    imageUrl: string | ArrayBuffer | null;
    imageAlt?: string;
    imageHeading: string;
    imageSubtext: string;
    contentHeading: string;
    contentSubtext: string;
    ctaText?: string;
    ctaBorder?: boolean;
    onCtaClick?: () => void;
    layout?: 'image-left' | 'image-right';
    darkBgColor?: string;
}
export declare const Hero: React.FC<HeroProps>;
