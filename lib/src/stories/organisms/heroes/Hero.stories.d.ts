import type { StoryObj } from '@storybook/react';
import { Hero } from './Hero';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Hero").HeroProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        imageUrl: {
            control: {
                type: "file";
                accept: string;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        layout: {
            control: {
                type: "select";
            };
            options: string[];
        };
        ctaBorder: {
            control: {
                type: "boolean";
            };
        };
        darkBgColor: {
            control: {
                type: "color";
            };
        };
        onCtaClick: {
            action: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Hero>;
export declare const Basic: Story;
export declare const ImageRight: Story;
export declare const WithoutCTA: Story;
export declare const DarkTheme: Story;
export declare const GreenTheme: Story;
export declare const Playground: Story;
