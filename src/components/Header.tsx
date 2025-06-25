import { Box, Heading, NavLink, Flex } from "theme-ui";
import type { FC } from "react";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Header: FC = () => {
    const data = useStaticQuery(graphql`
        query {
            profile: file(relativePath: { eq: "profile.JPG" }) {
                childImageSharp {
                    gatsbyImageData(width: 96, height: 96, layout: FIXED, quality: 90)
                }
            }
        }
    `);
    const image = getImage(data.profile.childImageSharp.gatsbyImageData);
    return (
        <Box as="header" sx={{ bg: "primary", color: "background", py: 3, mb: 4 }}>
            <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
                {image && (
                    <GatsbyImage
                        image={image}
                        alt="James Devine profile"
                        style={{
                            width: 96,
                            height: 96,
                            borderRadius: "50%",
                            marginBottom: 16,
                            border: "3px solid",
                            borderColor: "#fff"
                        }}
                        imgStyle={{ borderRadius: "50%", objectFit: "cover" }}
                    />
                )}
                <Heading as="h2" sx={{ m: 0, textAlign: "center" }}>
                    James Devine
                </Heading>
            </Flex>
            <Flex as="nav" sx={{ justifyContent: "center", gap: 3, mt: 2 }}>
                <NavLink href="/" p={2} sx={{ color: "background", fontWeight: "bold" }}>
                    Home
                </NavLink>
                <NavLink href="/about" p={2} sx={{ color: "background", fontWeight: "bold" }}>
                    About
                </NavLink>
                <NavLink href="/blog" p={2} sx={{ color: "background", fontWeight: "bold" }}>
                    Blog
                </NavLink>
            </Flex>
            <Flex sx={{ justifyContent: "center", gap: 3, mt: 2 }}>
                <NavLink href="https://github.com/jamesadevine" target="_blank" aria-label="GitHub" sx={{ color: "background", fontSize: 3 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                    </svg>
                </NavLink>
                <NavLink href="https://www.linkedin.com/in/james-devine-a9371a38/" target="_blank" aria-label="LinkedIn" sx={{ color: "background", fontSize: 3 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
                    </svg>
                </NavLink>
                <NavLink href="https://scholar.google.com/citations?user=22dM5lYAAAAJ" target="_blank" aria-label="Google Scholar" sx={{ color: "background", fontSize: 3 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 2.18L19.6 9 12 13.09 4.4 9 12 5.18zM7 12.98v2.02c0 1.1 2.24 2 5 2s5-.9 5-2v-2.02l-5 2.73-5-2.73z" />
                    </svg>
                </NavLink>
            </Flex>
        </Box>
    );
};

export default Header;
