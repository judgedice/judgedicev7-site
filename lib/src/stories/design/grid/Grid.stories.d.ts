import type { StoryObj } from '@storybook/react';
declare const GridDesign: () => import("react").JSX.Element;
declare const meta: {
    title: string;
    component: () => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof GridDesign>;
export declare const Default: Story;
export declare const GridSystem: Story;
