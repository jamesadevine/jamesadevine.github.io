import React from "react";
import { Box, Heading, Text, Flex, Card, Badge, Grid } from "theme-ui";
import Header from "../components/Header";

const workHistory = [
    {
        role: "Senior Researcher",
        company: "Tech Innovations Ltd.",
        period: "2021 – Present",
        description: "Leading research in IoT and embedded systems, managing a team of engineers, and publishing in top-tier conferences."
    },
    {
        role: "Embedded Systems Engineer",
        company: "Smart Devices Inc.",
        period: "2018 – 2021",
        description: "Developed firmware for consumer electronics, contributed to open-source projects, and collaborated with cross-functional teams."
    }
];

const academicHistory = [
    {
        degree: "PhD in Computer Engineering",
        institution: "University of Technology",
        period: "2015 – 2018"
    },
    {
        degree: "BEng in Electronic Engineering",
        institution: "Tech State University",
        period: "2011 – 2015"
    }
];

const coreSkills = [
    "Embedded Systems", "IoT", "C/C++", "Python", "Machine Learning", "Research", "Team Leadership", "Public Speaking"
];

const researchArticles = [
    {
        title: "Ultra-Low Power IoT Devices for Smart Cities",
        journal: "IEEE Internet of Things Journal, 2023",
        url: "#"
    },
    {
        title: "Secure Firmware Updates in Embedded Systems",
        journal: "ACM Transactions on Embedded Computing, 2022",
        url: "#"
    }
];

const ResumePage = () => (
    <Box sx={{ bg: "background", color: "text", minHeight: "100vh" }}>
        <Header />
        <Box sx={{ maxWidth: 700, mx: "auto", px: 3, py: 4 }}>
            <Heading as="h1" sx={{ mb: 4, textAlign: "center" }}>Resume / CV</Heading>
            <Heading as="h2" sx={{ mt: 4, mb: 2 }}>Work History</Heading>
            <Grid gap={3} columns={[1]}>
                {workHistory.map((job, i) => (
                    <Card key={i} sx={{ p: 3 }}>
                        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                            <Text as="strong">{job.role}</Text>
                            <Badge variant="primary">{job.period}</Badge>
                        </Flex>
                        <Text sx={{ fontStyle: "italic" }}>{job.company}</Text>
                        <Text sx={{ mt: 2 }}>{job.description}</Text>
                    </Card>
                ))}
            </Grid>
            <Heading as="h2" sx={{ mt: 4, mb: 2 }}>Academic History</Heading>
            <Grid gap={3} columns={[1]}>
                {academicHistory.map((edu, i) => (
                    <Card key={i} sx={{ p: 3 }}>
                        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                            <Text as="strong">{edu.degree}</Text>
                            <Badge variant="muted">{edu.period}</Badge>
                        </Flex>
                        <Text sx={{ fontStyle: "italic" }}>{edu.institution}</Text>
                    </Card>
                ))}
            </Grid>
            <Heading as="h2" sx={{ mt: 4, mb: 2 }}>Core Skills</Heading>
            <Flex sx={{ flexWrap: "wrap", gap: 2, mb: 3 }}>
                {coreSkills.map((skill, i) => (
                    <Badge key={i} variant="outline" sx={{ fontSize: 1 }}>{skill}</Badge>
                ))}
            </Flex>
            <Heading as="h2" sx={{ mt: 4, mb: 2 }}>Exciting Research Articles</Heading>
            <Grid gap={3} columns={[1]}>
                {researchArticles.map((article, i) => (
                    <Card key={i} sx={{ p: 3 }}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                            <Text as="strong">{article.title}</Text>
                        </a>
                        <Text sx={{ fontStyle: "italic", fontSize: 1 }}>{article.journal}</Text>
                    </Card>
                ))}
            </Grid>
        </Box>
    </Box>
);

export default ResumePage;
