import React from 'react';
import './colors.css';
interface ColorChange {
    colorName: string;
    oldValue: string;
    newValue: string;
    timestamp: number;
}
interface ColorsProps {
    editable?: boolean;
    onColorChange?: (change: ColorChange) => void;
}
export declare const Colors: React.FC<ColorsProps>;
export {};
