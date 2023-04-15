import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionTests = ({ tests }) => {
  if (!tests.length) return null;

  return (
    <Section title="Test Scores">
      {tests.map((test) => (
        <SummaryItem
          key={test.name}
          name={test.name}
          description={test.description}
          link={test.link}
        />
      ))}
    </Section>
  );
};

export default SectionTests;
