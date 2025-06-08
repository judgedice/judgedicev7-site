import { Card } from '../../components/Card';
var meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'green', 'orange'],
        },
        onCtaClick: { action: 'clicked' },
    },
};
export default meta;
export var Default = {
    args: {
        title: 'Biophilic Design',
        description: 'Transform your space with nature-inspired design solutions that enhance wellbeing and productivity.',
        features: [
            'Living wall installations',
            'Natural lighting integration',
            'Sustainable materials',
            'Air quality improvement',
        ],
        ctaText: 'Learn More',
        variant: 'default',
    },
};
export var Green = {
    args: {
        title: 'Interior Landscaping',
        description: 'Professional plant design and maintenance services to bring the outdoors inside your commercial space.',
        features: [
            'Custom plant selection',
            'Maintenance programs',
            'Seasonal updates',
            'Health monitoring',
        ],
        ctaText: 'Get Started',
        variant: 'green',
    },
};
export var Orange = {
    args: {
        title: 'Space Consultation',
        description: 'Expert guidance to optimize your environment for maximum impact and aesthetic appeal.',
        features: [
            'Site assessment',
            'Design recommendations',
            'Budget planning',
            'Implementation support',
        ],
        ctaText: 'Contact Us',
        variant: 'orange',
    },
};
export var WithCustomBackground = {
    args: {
        title: 'Custom Design',
        description: 'A card with a custom background image to showcase flexibility.',
        features: [
            'Custom styling',
            'Flexible content',
            'Responsive design',
            'Easy integration',
        ],
        ctaText: 'Explore',
        variant: 'default',
        backgroundImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    },
};
export var LongContent = {
    args: {
        title: 'Extended Features',
        description: 'This card demonstrates how the component handles longer content and more features while maintaining good visual hierarchy.',
        features: [
            'Feature one with longer description',
            'Another comprehensive feature',
            'Advanced functionality included',
            'Premium support available',
            'Extended warranty options',
            'Custom implementation',
        ],
        ctaText: 'View All Features',
        variant: 'green',
    },
};
export var Playground = {
    args: {
        title: 'Playground Card',
        description: 'Use the controls below to experiment with different props and see how the card responds.',
        features: [
            'Interactive controls',
            'Real-time updates',
            'Component testing',
            'Visual feedback',
        ],
        ctaText: 'Try It Out',
        variant: 'default',
    },
};
export var docs = {
    args: {
        title: "Card Component Documentation",
        description: "This story is used to generate a docs page for the Card component.",
        features: ["Documentation", "Usage", "Props", "Examples"],
        ctaText: "Read Docs",
        variant: "default"
    },
    parameters: {
        docs: { page: function () { return <div>This is a docs page for the Card component.</div>; } }
    },
    tags: ["docsPage"]
};
