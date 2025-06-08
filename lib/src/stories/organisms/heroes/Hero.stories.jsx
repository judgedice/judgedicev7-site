import { Hero } from './Hero';
var meta = {
    title: 'Organisms/Heroes',
    component: Hero,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        imageUrl: {
            control: { type: 'file', accept: '.png,.jpg,.jpeg,.webp' },
            description: 'URL or path to the hero image',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        layout: {
            control: { type: 'select' },
            options: ['image-left', 'image-right'],
        },
        ctaBorder: {
            control: { type: 'boolean' },
        },
        darkBgColor: {
            control: { type: 'color' },
        },
        onCtaClick: { action: 'cta-clicked' },
    },
};
export default meta;
export var Basic = {
    args: {
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop',
        imageAlt: 'Modern office space with plants',
        imageHeading: "Face",
        imageSubtext: 'Transform your workspace with biophilic design.',
        contentHeading: 'Planting the places where great teams thrive.',
        contentSubtext: 'We all know that indoor planting enhances a space. But we believe it can do more. Used skillfully, it supports the creation of workspaces of the future.',
        ctaText: 'Get Started',
        ctaBorder: true,
        layout: 'image-left',
        darkBgColor: '#1a3b3a',
    },
};
export var ImageRight = {
    args: {
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop',
        imageAlt: 'Office interior with green plants',
        imageHeading: 'Creating spaces that inspire productivity.',
        imageSubtext: 'Where nature meets modern design.',
        contentHeading: 'Designing workspaces for tomorrow.',
        contentSubtext: 'Our expertise in biophilic design creates environments that boost creativity, reduce stress, and improve overall well-being for your team.',
        ctaText: 'Learn More',
        ctaBorder: false,
        layout: 'image-right',
        darkBgColor: '#2d5a3d',
    },
};
export var WithoutCTA = {
    args: {
        imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=1000&fit=crop',
        imageAlt: 'Green office space',
        imageHeading: 'Bringing nature indoors.',
        imageSubtext: 'Experience the difference plants make.',
        contentHeading: 'Transform your environment.',
        contentSubtext: 'Professional interior landscaping services that create healthier, more productive spaces through the strategic use of plants and natural elements.',
        layout: 'image-left',
        darkBgColor: '#1a3b3a',
    },
};
export var DarkTheme = {
    args: {
        imageUrl: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=1000&fit=crop',
        imageAlt: 'Modern workspace',
        imageHeading: 'Premium workspace solutions.',
        imageSubtext: 'Where luxury meets sustainability.',
        contentHeading: 'Elevate your business environment.',
        contentSubtext: 'Custom design solutions that reflect your brand values while creating spaces that people love to work in. From consultation to implementation, we handle every detail.',
        ctaText: 'Contact Us',
        ctaBorder: true,
        layout: 'image-left',
        darkBgColor: '#0f1419',
    },
};
export var GreenTheme = {
    args: {
        imageUrl: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=1000&fit=crop',
        imageAlt: 'Plant-filled office',
        imageHeading: 'Sustainable design for modern businesses.',
        imageSubtext: 'Creating harmony between work and nature.',
        contentHeading: 'The future of workspace design.',
        contentSubtext: 'Integrating living elements into commercial spaces isn\'t just about aesthetics—it\'s about creating environments that support human well-being and business success.',
        ctaText: 'Explore Solutions',
        ctaBorder: false,
        layout: 'image-right',
        darkBgColor: '#1e4d3b',
    },
};
export var Playground = {
    args: {
        imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=1000&fit=crop',
        imageAlt: 'Office space',
        imageHeading: 'Customize this hero section.',
        imageSubtext: 'Use the controls to experiment with different options.',
        contentHeading: 'Interactive playground.',
        contentSubtext: 'Try different layouts, colors, and content to see how the hero component adapts to your needs.',
        ctaText: 'Try It Out',
        ctaBorder: true,
        layout: 'image-left',
        darkBgColor: '#1a3b3a',
    },
};
