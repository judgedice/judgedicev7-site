import React from 'react';
import './card.css';
export interface CardProps {
    title: string;
    description: string;
    features: string[];
    ctaText: string;
    variant?: 'default' | 'green' | 'orange';
    backgroundImage?: string;
    onCtaClick?: () => void;
}
export declare const Card: React.FC<CardProps>;
