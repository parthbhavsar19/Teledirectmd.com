import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {FadeInText} from '../components/FadeInText';
import {CallToAction} from '../components/CallToAction';
import {BRAND} from '../constants';

const HookScene: React.FC = () => {
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
        text="Need a Doctor Today?"
        fontSize={72}
        color={BRAND.white}
        fontWeight={800}
      />
    </AbsoluteFill>
  );
};

const ValueScene: React.FC = () => {
  const lines = [
    'Same-Day Appointments',
    'Board-Certified Providers',
    'All 50 States',
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      {lines.map((line, i) => (
        <div key={line} style={{marginBottom: 30}}>
          <FadeInText
            text={line}
            fontSize={52}
            color={BRAND.darkText}
            delay={i * 25}
            fontWeight={600}
          />
        </div>
      ))}
    </AbsoluteFill>
  );
};

export const AppointmentAd: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Scene 1: Hook (4s = 120 frames) */}
      <Sequence from={0} durationInFrames={120}>
        <HookScene />
      </Sequence>

      {/* Scene 2: Value Props (5s = 150 frames) */}
      <Sequence from={120} durationInFrames={150}>
        <ValueScene />
      </Sequence>

      {/* Scene 3: CTA (6s = 180 frames) */}
      <Sequence from={270} durationInFrames={180}>
        <CallToAction
          heading="Book Now"
          subtext="No waiting rooms. No surprise bills."
        />
      </Sequence>
    </AbsoluteFill>
  );
};
