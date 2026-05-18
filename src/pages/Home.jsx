import { Container, Box, Typography, Paper } from '@mui/material';

function Home() {
    return (
        <Container maxWidth="md" sx={{ py: 10 }}>

            <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography variant="h2" sx={{ mb: 1 }}>
                    Hi, I'm Lulu Wilson.
                </Typography>
                <Typography variant="h5" color="textSecondary">
                    CS & Math Student | Future Software Engineer
                </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <Paper
                    elevation={0}
                    sx={{
                        width: 300,
                        height: 300,
                        display: 'inline-block',
                        borderRadius: '50%',
                        overflow: 'hidden',
                    }}
                >
                    <img src='pfp.jpg' alt="Lulu Wilson" style={{ maxWidth: 300 }} />
                </Paper>
            </Box>

        </Container>
    );
}

export default Home