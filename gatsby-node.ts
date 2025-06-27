import { CreatePagesArgs } from 'gatsby';
import path from 'path';

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const BlogPostTemplate = path.resolve('./src/templates/BlogPost.tsx');

  const result: any = await graphql(
    `
      query {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
              title
              date
              author
              tags
              description
            }
            internal {
              contentFilePath
            }
            parent {
              ... on File {
                absolutePath
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading the MDX/Markdown result',
      result.errors
    );
  }

  // Create pages for MDX files
  result.data?.allMdx.nodes.forEach((node) => {
    console.log(node)
    createPage({
      path: `/blog/${node.frontmatter?.slug}`,
      component: `${BlogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });

  createPage({
    path: `/blog/`,
    component: path.resolve('./src/templates/BlogPostIndex.tsx'),
    context: { data: result.data?.allMdx.nodes },
  });

  // Create pages for Markdown files
  // result.data?.allMarkdownRemark.nodes.forEach((node) => {
  //   createPage({
  //     path: `/blog/${node.frontmatter?.slug}`,
  //     component: BlogPostTemplate,
  //     context: { id: node.id, fileAbsolutePath: node.parent?.absolutePath },
  //   });
  // });
};