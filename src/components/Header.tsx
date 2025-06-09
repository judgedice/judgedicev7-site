'use client';

import { Header as StorybookHeader } from '../../lib/stories/components/Header';

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