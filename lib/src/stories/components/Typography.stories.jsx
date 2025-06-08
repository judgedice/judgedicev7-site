import { Typography } from './Typography';
var meta = {
    title: 'Design System/Typography',
    component: Typography,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle', 'body', 'small', 'caption'],
        },
        weight: {
            control: 'select',
            options: ['light', 'normal', 'medium', 'semibold', 'bold'],
        },
        color: {
            control: 'select',
            options: ['primary', 'text', 'text-light', 'success', 'warning', 'error', 'info'],
        },
        align: {
            control: 'select',
            options: ['left', 'center', 'right'],
        },
    },
};
export default meta;
// Headings
export var Heading1 = {
    args: {
        variant: 'h1',
        children: 'Heading 1 - The quick brown fox jumps over the lazy dog',
        weight: "semibold"
    },
};
export var Heading2 = {
    args: {
        variant: 'h2',
        children: 'Heading 2 - The quick brown fox jumps over the lazy dog',
    },
};
export var Heading3 = {
    args: {
        variant: 'h3',
        children: 'Heading 3 - The quick brown fox jumps over the lazy dog',
    },
};
export var Heading4 = {
    args: {
        variant: 'h4',
        children: 'Heading 4 - The quick brown fox jumps over the lazy dog',
    },
};
export var Heading5 = {
    args: {
        variant: 'h5',
        children: 'Heading 5 - The quick brown fox jumps over the lazy dog',
    },
};
export var Heading6 = {
    args: {
        variant: 'h6',
        children: 'Heading 6 - The quick brown fox jumps over the lazy dog',
    },
};
export var Subtitle = {
    args: {
        variant: 'subtitle',
        children: 'Subtitle - The quick brown fox jumps over the lazy dog',
    },
};
// Body text
export var Body = {
    args: {
        variant: 'body',
        children: 'Body text - The quick brown fox jumps over the lazy dog. This is a longer paragraph to demonstrate how body text looks with multiple lines. It includes various punctuation marks and spaces to show the typography in a realistic context.',
    },
};
export var Small = {
    args: {
        variant: 'small',
        children: 'Small text - The quick brown fox jumps over the lazy dog',
    },
};
export var Caption = {
    args: {
        variant: 'caption',
        children: 'Caption text - The quick brown fox jumps over the lazy dog',
    },
};
// Weights
export var LightWeight = {
    args: {
        variant: 'body',
        weight: 'light',
        children: 'Light weight text',
    },
};
export var NormalWeight = {
    args: {
        variant: 'body',
        weight: 'normal',
        children: 'Normal weight text',
    },
};
export var MediumWeight = {
    args: {
        variant: 'body',
        weight: 'medium',
        children: 'Medium weight text',
    },
};
export var SemiboldWeight = {
    args: {
        variant: 'body',
        weight: 'semibold',
        children: 'Semibold weight text',
    },
};
export var BoldWeight = {
    args: {
        variant: 'body',
        weight: 'bold',
        children: 'Bold weight text',
    },
};
// Colors
export var PrimaryColor = {
    args: {
        variant: 'body',
        color: 'primary',
        children: 'Primary color text',
    },
};
export var TextColor = {
    args: {
        variant: 'body',
        color: 'text',
        children: 'Text color',
    },
};
export var TextLightColor = {
    args: {
        variant: 'body',
        color: 'text-light',
        children: 'Text light color',
    },
};
export var SuccessColor = {
    args: {
        variant: 'body',
        color: 'success',
        children: 'Success color text',
    },
};
export var WarningColor = {
    args: {
        variant: 'body',
        color: 'warning',
        children: 'Warning color text',
    },
};
export var ErrorColor = {
    args: {
        variant: 'body',
        color: 'error',
        children: 'Error color text',
    },
};
export var InfoColor = {
    args: {
        variant: 'body',
        color: 'info',
        children: 'Info color text',
    },
};
// Alignment
export var LeftAligned = {
    args: {
        variant: 'body',
        align: 'left',
        children: 'Left aligned text',
    },
};
export var CenterAligned = {
    args: {
        variant: 'body',
        align: 'center',
        children: 'Center aligned text',
    },
};
export var RightAligned = {
    args: {
        variant: 'body',
        align: 'right',
        children: 'Right aligned text',
    },
};
