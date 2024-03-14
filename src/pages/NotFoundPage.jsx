import { WrapOutlet } from 'components/App.styled';
import React from 'react';
import { WrapNotFound } from './Page.styled';

export default function NotFoundPage() {
  return (
    <WrapOutlet>
      <WrapNotFound>
        <h2 className="title">Not Found</h2>
        <div className="img"></div>
      </WrapNotFound>
    </WrapOutlet>
  );
}
