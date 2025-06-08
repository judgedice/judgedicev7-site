import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from '../../components/Colors';
declare const meta: Meta<typeof Colors>;
export default meta;
type Story = StoryObj<typeof Colors>;
export declare const Default: Story;
export declare const Editable: Story;
export declare const WithCustomColors: Story;
