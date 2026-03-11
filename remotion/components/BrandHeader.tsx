import React from 'react';
import {AbsoluteFill} from 'remotion';
import {FadeInText} from './FadeInText';
import {BRAND} from '../constants';

export const BrandHeader: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      <FadeInText
        text={BRAND.name}
        fontSize={96}
        color={BRAND.white}
        fontWeight={800}
      />
      <div style={{height: 30}} />
      <FadeInText
        text={BRAND.tagline}
        fontSize={42}
        color="rgba(255, 255, 255, 0.9)"
        delay={20}
        fontWeight={400}
      />
    </AbsoluteFill>
  );
};
