import React from "react";
import { Box, Heading, Text, Button, Link } from "theme-ui";
import Header from "../components/Header";

const NotFoundPage = () => (
    <Box sx={{ bg: "background", color: "text", minHeight: "100vh" }}>
        <Header />
        <Box sx={{ maxWidth: 600, mx: "auto", px: 3, py: 0, textAlign: "center" }}>
            <Heading as="h1" sx={{ fontSize: 6, mb: 3 }}>
                Page Not Found
            </Heading>
            <Text sx={{ fontSize: 2, mb: 4 }}>
                Sorry, the page you are looking for does not exist or has been moved.<br />
                Please check the URL or return to the homepage. <br />
                If you believe this is an error, please file a
                <Link
                    href="https://github.com/jamesadevine/jamesadevine.github.io/issues/new?title=Broken%20link%20on%20site&body=I%20encountered%20a%20404%20error%20at%20the%20following%20URL:%20%60%60%60%5Binsert%20URL%20here%5D%60%60%60%0A%0APlease%20describe%20how%20you%20got%20here%20or%20any%20other%20details%20that%20might%20help.%0A"
                    target="_blank"
                    sx={{ textDecoration: "underline", color: "primary", ml: 1, fontSize: 2 }}
                >GitHub issue</Link>.
            </Text>
            <Box sx={{ mt: 2 }}>
                <Link href="/" sx={{ textDecoration: "none" }}>
                    <Button sx={{ mt: 3 }}>
                        Return home
                    </Button>
                </Link>
            </Box>
        </Box>
    </Box >
);

export default NotFoundPage;
