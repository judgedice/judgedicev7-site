import React from 'react';
import './typography.css';
export interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'small' | 'caption';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    color?: 'primary' | 'text' | 'text-light' | 'success' | 'warning' | 'error' | 'info';
    align?: 'left' | 'center' | 'right';
    className?: string;
    children: React.ReactNode;
}
export declare const Typography: React.FC<TypographyProps>;
