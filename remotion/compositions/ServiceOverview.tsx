import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {BrandHeader} from '../components/BrandHeader';
import {FadeInText} from '../components/FadeInText';
import {ServiceCard} from '../components/ServiceCard';
import {CallToAction} from '../components/CallToAction';
import {BRAND, SERVICES, VALUE_PROPS} from '../constants';

const SubtitleScene: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
      }}
    >
      <FadeInText
        text={BRAND.subtitle}
        fontSize={44}
        color={BRAND.darkText}
        fontWeight={500}
      />
    </AbsoluteFill>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <FadeInText
        text="Why Choose TeleDirectMD?"
        fontSize={52}
        color={BRAND.primaryColor}
        fontWeight={700}
      />
      <div style={{height: 50}} />
      {VALUE_PROPS.map((prop, i) => (
        <div key={prop} style={{marginBottom: 20}}>
          <FadeInText
            text={`✓  ${prop}`}
            fontSize={40}
            color={BRAND.darkText}
            delay={30 + i * 25}
            fontWeight={500}
          />
        </div>
      ))}
    </AbsoluteFill>
  );
};

export const ServiceOverview: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Scene 1: Brand Intro (5s = 150 frames) */}
      <Sequence from={0} durationInFrames={150}>
        <BrandHeader />
      </Sequence>

      {/* Scene 2: Subtitle (5s) */}
      <Sequence from={150} durationInFrames={150}>
        <SubtitleScene />
      </Sequence>

      {/* Scene 3: Urgent Care (7s = 210 frames) */}
      <Sequence from={300} durationInFrames={210}>
        <ServiceCard
          title={SERVICES[0].title}
          description={SERVICES[0].description}
        />
      </Sequence>

      {/* Scene 4: Chronic Care (7s) */}
      <Sequence from={510} durationInFrames={210}>
        <ServiceCard
          title={SERVICES[1].title}
          description={SERVICES[1].description}
        />
      </Sequence>

      {/* Scene 5: Preventive Health (7s) */}
      <Sequence from={720} durationInFrames={210}>
        <ServiceCard
          title={SERVICES[2].title}
          description={SERVICES[2].description}
        />
      </Sequence>

      {/* Scene 6: Why Choose Us (7s) */}
      <Sequence from={930} durationInFrames={210}>
        <WhyChooseUs />
      </Sequence>

      {/* Scene 7: CTA (7s) */}
      <Sequence from={1140} durationInFrames={210}>
        <CallToAction
          heading="Book Your Visit Today"
          subtext="HIPAA Compliant · All 50 States"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
