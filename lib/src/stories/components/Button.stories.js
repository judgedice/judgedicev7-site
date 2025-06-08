import { Button } from './Button';
// Mock function for onClick handler
var mockOnClick = function () { };
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
var meta = {
    title: 'Molecules/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        onClick: { action: 'clicked' },
    },
    // Use mockOnClick for the onClick handler
    args: { onClick: mockOnClick },
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export var Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};
export var Secondary = {
    args: {
        label: 'Button',
    },
};
export var Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};
export var Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
