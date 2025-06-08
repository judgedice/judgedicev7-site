import type { StoryObj } from '@storybook/react';
declare const SpacingDesign: () => import("react").JSX.Element;
declare const meta: {
    title: string;
    component: () => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof SpacingDesign>;
export declare const Default: Story;
export declare const SpacingScale: Story;
