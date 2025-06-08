import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
declare const meta: Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
