import { QuoteCarousel } from './QuoteCarousel';
var meta = {
    title: 'Organisms/QuoteCarousel',
    component: QuoteCarousel,
    parameters: {
        layout: 'fullscreen',
        controls: {
            expanded: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {
        autoRotate: {
            control: 'boolean',
            description: 'Whether to automatically rotate through quotes',
        },
        rotationInterval: {
            control: { type: 'number', min: 1000, max: 10000, step: 1000 },
            description: 'Time in milliseconds between quote rotations',
        },
        backgroundColor: {
            control: 'select',
            options: ['var(--vs-color-secondary)', 'var(--vs-color-primary)', 'var(--vs-color-background-alt)'],
            description: 'Background color of the carousel',
            defaultValue: 'var(--vs-color-secondary)',
        },
        textColor: {
            control: 'select',
            options: ['var(--vs-color-text-lighter)', 'var(--vs-color-text-light)', 'var(--vs-color-text)'],
            description: 'Text color for the quotes',
            defaultValue: 'var(--vs-color-text-lighter)',
        },
        quoteMarkColor: {
            control: 'select',
            options: ['var(--vs-color-text-lighter)', 'var(--vs-color-primary)', 'var(--vs-color-accent)'],
            description: 'Color of the decorative quote mark',
            defaultValue: 'var(--vs-color-text-lighter)',
        },
    },
};
export default meta;
var exampleQuotes = [
    {
        pullQuote: "Vantage Spaces has excelled in bringing the outside in!",
        body: "Complementing the environment and uplifting the aesthetics and ambience of the space. We were supported by a dedicated team whose care and extensive knowledge shine through their work.",
        citation: {
            name: "Liam Whiley",
            role: "Client",
            company: "Oliver Wyman"
        }
    },
    {
        pullQuote: "Innovators in biophilia that everyone else follows suit.",
        body: "Their expertise in biophilic design and commitment to sustainable practices has set new standards in the industry.",
        citation: {
            name: "Adrian Norman",
            role: "Head of Design",
            company: "Morgan Lovell"
        }
    },
    {
        pullQuote: "Vantage Spaces led the client through the design and procurement process with innovative solutions.",
        body: "Their solutions complimented the design and met the budget and brief perfectly.",
        citation: {
            name: "Director",
            role: "Project Management",
            company: "CBRE UK"
        }
    }
];
export var Default = {
    args: {
        quotes: exampleQuotes,
        autoRotate: true,
        rotationInterval: 5000,
        backgroundColor: 'var(--vs-color-secondary)',
        textColor: 'var(--vs-color-text-lighter)',
        quoteMarkColor: 'var(--vs-color-text-lighter)',
    },
};
export var ManualRotation = {
    args: {
        quotes: exampleQuotes,
        autoRotate: false,
        backgroundColor: 'var(--vs-color-secondary)',
        textColor: 'var(--vs-color-text-lighter)',
        quoteMarkColor: 'var(--vs-color-text-lighter)',
    },
};
