import React from 'react';
import './quote-carousel.css';
export interface Quote {
    pullQuote: string;
    body: string;
    citation: {
        name: string;
        role: string;
        company: string;
    };
}
interface QuoteCarouselProps {
    quotes: Quote[];
    autoRotate?: boolean;
    rotationInterval?: number;
    backgroundColor?: string;
    textColor?: string;
    quoteMarkColor?: string;
}
export declare const QuoteCarousel: React.FC<QuoteCarouselProps>;
export {};
