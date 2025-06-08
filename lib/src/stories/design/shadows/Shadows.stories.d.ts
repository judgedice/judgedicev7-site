import type { StoryObj } from '@storybook/react';
declare const ShadowsDesign: () => import("react").JSX.Element;
declare const meta: {
    title: string;
    component: () => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof ShadowsDesign>;
export declare const Default: Story;
export declare const ShadowScale: Story;
