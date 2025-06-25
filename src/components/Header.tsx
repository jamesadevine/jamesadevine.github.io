import { Box, Heading, NavLink, Flex } from "theme-ui";
import type { FC } from "react";
import React from "react";

import { MenuButton } from 'theme-ui'

const Header: FC = () => (
    <Box as="header" sx={{ bg: "primary", color: "background", py: 3, mb: 4 }}>
        <Heading as="h2" sx={{ m: 0, textAlign: "center" }}>
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
    </Box>
);

export default Header;
