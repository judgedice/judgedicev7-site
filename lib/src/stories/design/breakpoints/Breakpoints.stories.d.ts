import type { StoryObj } from '@storybook/react';
declare const BreakpointsDesign: () => import("react").JSX.Element;
declare const meta: {
    title: string;
    component: () => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof BreakpointsDesign>;
export declare const Default: Story;
export declare const BreakpointSystem: Story;
