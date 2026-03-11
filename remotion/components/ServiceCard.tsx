import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig} from 'remotion';
import {BRAND} from '../constants';

interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({title, description}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const slideUp = spring({
    frame,
    fps,
    config: {damping: 18, stiffness: 80},
  });

  const translateY = interpolate(slideUp, [0, 1], [80, 0]);
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          backgroundColor: BRAND.white,
          borderRadius: 24,
          padding: 60,
          maxWidth: 900,
          width: '100%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: BRAND.primaryColor,
            marginBottom: 24,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 30,
            color: BRAND.subtitleText,
            lineHeight: 1.5,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {description}
        </div>
      </div>
    </AbsoluteFill>
  );
};
