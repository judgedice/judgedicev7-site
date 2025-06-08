import type { StoryObj } from '@storybook/react';
declare const TypographyDesign: () => import("react").JSX.Element;
declare const meta: {
    title: string;
    component: () => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof TypographyDesign>;
export declare const Default: Story;
export declare const Headings: Story;
export declare const BodyText: Story;
