import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ education }) => {
  return (
    <Section title="Education">
      {education.map((item) => (
        <SummaryItem
        key={item.name}
        name={item.name}
        role={item.role}
        description={item.description}
        link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;