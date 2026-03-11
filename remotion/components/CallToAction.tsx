import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig} from 'remotion';
import {BRAND} from '../constants';

interface CallToActionProps {
  heading: string;
  subtext?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({heading, subtext}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: {damping: 15, stiffness: 100},
  });

  const scaleValue = interpolate(scale, [0, 1], [0.7, 1]);
  const opacity = interpolate(frame, [0, 15], [0, 1], {
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
          transform: `scale(${scaleValue})`,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: BRAND.white,
            marginBottom: 30,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {heading}
        </div>
        <div
          style={{
            fontSize: 36,
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: 40,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {BRAND.url}
        </div>
        {subtext && (
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {subtext}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
