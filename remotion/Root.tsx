import React from 'react';
import {Composition} from 'remotion';
import {ServiceOverview} from './compositions/ServiceOverview';
import {AppointmentAd} from './compositions/AppointmentAd';
import {FPS} from './constants';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="ServiceOverview"
        component={ServiceOverview}
        durationInFrames={1350}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="AppointmentAd"
        component={AppointmentAd}
        durationInFrames={450}
        fps={FPS}
        width={1080}
        height={1080}
      />
    </>
  );
};
