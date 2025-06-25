import React from "react";
import { Box, Heading, Text, Button } from "theme-ui";
import Header from "../components/Header";

const NotFoundPage = () => (
    <Box sx={{ bg: "background", color: "text", minHeight: "100vh" }}>
        <Header />
        <Box sx={{ maxWidth: 600, mx: "auto", px: 3, py: 5, textAlign: "center" }}>
            <Heading as="h1" sx={{ fontSize: 6, mb: 3 }}>
                404
            </Heading>
            <Text sx={{ fontSize: 4, mb: 3 }}>
                Oops! This page is more lost than a left sock in the laundry.
            </Text>
            <Text sx={{ fontSize: 2, mb: 4 }}>
                Maybe it joined a band of wandering pixels, or perhaps it just needed a vacation.<br />
                Either way, it's not here.
            </Text>
            <Button as="a" href="/" sx={{ mt: 3 }}>
                Return to Safety
            </Button>
            <Box sx={{ mt: 5 }}>
                <span role="img" aria-label="Lost sock" style={{ fontSize: 48 }}>
                    🧦
                </span>
            </Box>
        </Box>
    </Box>
);

export default NotFoundPage;
