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
                        I am a third-year student at the University of Virginia pursuing a
                        Bachelor of Science in Computer Science and a Bachelor of Arts in Mathematics.
                        I am passionate about mathematics, statistical modeling, software engineering,
                        complex problem solving in real-world settings, and learning. Outside of academics,
                        I love being in nature, crocheting, and doing theatre (specifically with UVA's First Year Players)!
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
}

export default About