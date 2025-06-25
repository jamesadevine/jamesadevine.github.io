// ./src/templates/BlogPostTemplate.tsx
import { MDXProvider } from '@mdx-js/react';
import { graphql, PageProps } from 'gatsby';
import React from 'react';

import type { FC } from 'react'
import { Container } from 'theme-ui';

class Props {
    data: { mdx }
    children: React.ReactNode
}

const BlogPostTemplate: FC<Props> = ({
    data: { mdx },
    children
}) => {
    return (
        <Container>
            <h1>{mdx.frontmatter.title}</h1>
            <h4
                style={{
                    color: "gray",
                    fontWeight: "normal",
                }}
            >{`${mdx.frontmatter.date} by ${mdx.frontmatter.author}`}</h4>
            <MDXProvider components={mdx.body}>
            </MDXProvider>
        </Container >
    );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        author
      }
    }
  }
`;