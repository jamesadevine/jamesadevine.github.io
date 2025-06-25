import { Box, Heading, Text, Container } from "theme-ui";
import type { FC } from "react";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const IndexPage: FC = () => (
    <Container>
        <Header />
        <Container sx={{ py: 5 }}>
            <Box as="main" sx={{ textAlign: "center" }}>
                <Heading as="h1" mb={3}>
                    Welcome to James Devine's Website
                </Heading>
                <Text>
                    This is your personal Gatsby site. Edit <code>src/pages/index.tsx</code> to get started!
                </Text>
            </Box>
        </Container>
    </Container>

);

export default IndexPage;
