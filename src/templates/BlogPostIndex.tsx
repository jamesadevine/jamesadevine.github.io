import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Heading, Box, Text } from 'theme-ui';
import Header from '../components/Sidebar';

interface BlogPost {
    id: string;
    frontmatter: {
        title: string;
        date: string;
        author: string;
        description?: string;
        tags?: string[];
        slug: string;
    };
}


interface BlogPostIndexProps {
    pageContext: {
        data: BlogPost[];
    };
}

const BlogPostIndex: React.FC<BlogPostIndexProps> = ({ pageContext }) => {
    const posts = pageContext.data;
    return (
        <Container>
            <Header />
            <Container sx={{ py: 5 }}>
                <Heading as="h1" sx={{ mb: 5 }}>
                    Blog Posts
                </Heading>
                {posts.length === 0 ? (
                    <Text>No blog posts found.</Text>
                ) : (
                    posts.map(post => (
                        <Box key={post.id} sx={{ mb: 4, p: 3, border: '1px solid #eee', borderRadius: 4 }}>
                            <Heading as="h2" sx={{ fontSize: 3, mb: 2 }}>
                                <Link to={`/blog/${post.frontmatter.slug}`} style={{ color: 'var(--theme-ui-colors-primary, #07c)', textDecoration: 'none' }}>
                                    {post.frontmatter.title}
                                </Link>
                            </Heading>
                            <Text sx={{ color: 'gray', fontSize: 1, mb: 2 }}>
                                {post.frontmatter.date} by {post.frontmatter.author}
                            </Text>
                            {post.frontmatter.description && (
                                <Text sx={{ fontSize: 2, mb: 2 }}>{post.frontmatter.description}</Text>
                            )}
                            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                                <Box sx={{ mt: 2, mb: 1 }}>
                                    {post.frontmatter.tags.map(tag => (
                                        <Box as="span" key={tag} sx={{ display: 'inline-block', bg: 'muted', color: 'text', px: 2, py: 1, borderRadius: 2, fontSize: 1, mr: 2 }}>
                                            #{tag}
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    ))
                )}
            </Container>
        </Container>
    );
};

export default BlogPostIndex;

export const query = graphql`
            query BlogPostIndexQuery {
                allMdx(sort: {frontmatter: {date: DESC } }) {
                nodes {
                id
        frontmatter {
                title
          date(formatString: "MMMM DD, YYYY")
            author
            description
            tags
            slug
        }
            excerpt(pruneLength: 160)
      }
    }
  }
            `;
