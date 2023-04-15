import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCertifications = ({ certifications }) => {
  if (!certifications.length) return null;

  return (
    <Section title="Certifications">
      {certifications.map((cert) => (
        <SummaryItem
          key={cert.name}
          name={cert.name}
          description={cert.description}
          link={cert.link}
        />
      ))}
    </Section>
  );
};

export default SectionCertifications;
