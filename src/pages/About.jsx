import { Container, Box, Typography, Paper } from '@mui/material';

function About() {
    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Box>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                    About Me
                </Typography>
                <Paper elevation={0} sx={{ p: 3, backgroundColor: 'transparent', borderLeft: 4, borderColor: 'primary.main' }}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        I am a fourth-year student at the University of Virginia pursuing a Bachelor of Science in Computer Science and a Bachelor of Arts in Mathematics. 
                        I am currently taking graduate-level coursework through UVA's Accelerate program and will complete a Master of Science in Computer Science in the 2027-2028 academic year.
                        My primary interests are in backend software development, with a growing focus on cybersecurity. Through my coursework in systems, algorithms, and cryptographic protocols, I've developed a strong foundation in building reliable software and reasoning about security in adversarial settings. 
                        I enjoy applying mathematical thinking and statistical modeling to solve complex, real-world problems.
                        Outside of academics, I enjoy spending time in nature, crocheting, and participating in theatre, especially with UVA's First Year Players.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
}

export default About