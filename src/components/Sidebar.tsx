import { Box, Heading, NavLink, Flex } from "theme-ui";
import type { FC } from "react";
import React from "react";
import { Avatar } from 'theme-ui'
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
// import profile from "../images/profile.JPG";


const Sidebar: FC = () => {
    const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.JPG" }) {
        childImageSharp {
          gatsbyImageData(width: 80, height: 80, layout: FIXED)
        }
      }
    }
  `);

    const image = getSrc(data.profile);

    return (<Box as="header" sx={{ bg: "primary", color: "background", py: 3, mb: 4 }}>
        <Heading as="h2" sx={{ m: 0, textAlign: "center" }}>
            <Avatar src={image} sx={{ backgroundColor: 'white' }} />

            James Devine
        </Heading>
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
    </Box>)
};

export default Sidebar;
