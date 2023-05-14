
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionSocials = ({ socials }) => {
  return (
    <Section title="Socials">
      {socials.map((item) => (
        <SummaryItem
        key={item.name}
        name={item.name}
        link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionSocials;