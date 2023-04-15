const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      siteUrl: String
      name: String
      title: String
      description: String
      author: String
      github: String
      linkedin: String
      resume: String
      about: String
      projects: [SectionItem]
      experience: [SectionItem]
      skills: [SectionItem]
      tests: [SectionItem]
      certifications: [SectionItem]
      accolades: [SectionItem]
    }

    type SectionItem {
      name: String!
      description: String!
      link: String!
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    
    type Fields {
      slug: String
    }
  `;
  createTypes(typeDefs);
};
