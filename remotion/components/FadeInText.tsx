import React from 'react';
import {useCurrentFrame, interpolate, spring, useVideoConfig} from 'remotion';

interface FadeInTextProps {
  text: string;
  fontSize?: number;
  color?: string;
  delay?: number;
  fontWeight?: number;
  textAlign?: 'left' | 'center' | 'right';
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  text,
  fontSize = 48,
  color = '#FFFFFF',
  delay = 0,
  fontWeight = 700,
  textAlign = 'center',
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);

  const opacity = interpolate(adjustedFrame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const translateY = spring({
    frame: adjustedFrame,
    fps,
    config: {damping: 20, stiffness: 100},
  });

  const y = interpolate(translateY, [0, 1], [30, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        fontSize,
        color,
        fontWeight,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign,
        lineHeight: 1.3,
      }}
    >
      {text}
    </div>
  );
};
