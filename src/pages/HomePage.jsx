import React from 'react';
import { WrapOutlet } from '../components/App.styled';
import { Wellcome } from 'components/Wellcome/Wellcome';

export default function HomePage() {
  return (
    <WrapOutlet>
      <Wellcome />
    </WrapOutlet>
  );
}
