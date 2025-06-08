import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
declare const meta: Meta<typeof Page>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedOut: Story;
export declare const LoggedIn: Story;
