import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionAccolades from '../components/section-accolades';
import SectionCertifications from '../components/section-certifications';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SectionTests from '../components/section-tests';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const tests = get(data, 'site.siteMetadata.tests', false);
  const certifications = get(data, 'site.siteMetadata.certifications', false);
  const accolades = get(data, 'site.siteMetadata.accolades', false);
  
  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} />
      {about && <SectionAbout about={about} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {tests && tests.length && <SectionTests tests={tests} />}
      {certifications && certifications.length && <SectionCertifications certifications={certifications} />}
      {accolades && accolades.length && <SectionAccolades accolades={accolades} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        resume
        projects {
          name
          description
          link
        }
        experience {
          name
          role
          description
          link
        }
        skills {
          name
          description
        }
        tests {
          name
          description
          link
        }
        certifications {
          name
          description
          link
        }
        accolades {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
