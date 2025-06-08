'use client';

import { Header as StorybookHeader } from '../../../judgedicev7-storybook/src/stories/components/Header';

export const Header = () => {
  return (
    <StorybookHeader
      user={undefined}
      onLogin={() => {}}
      onLogout={() => {}}
      onCreateAccount={() => {}}
    />
  );
}; 