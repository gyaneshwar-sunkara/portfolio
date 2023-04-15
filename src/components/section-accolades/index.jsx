import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionAccolades = ({ accolades }) => {
  if (!accolades.length) return null;

  return (
    <Section title="Accolades">
      {accolades.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionAccolades;
