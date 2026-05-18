import { Container, Box, Typography, Paper, Button, Stack, Grid } from '@mui/material';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Email as EmailIcon } from '@mui/icons-material';

function Contact() {
    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
                Contact
            </Typography>

            <Paper elevation={2}  sx={{ p: 4, textAlign: 'center', width: '75%', mx: 'auto', transition: 'transform .3s, box-shadow .3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <EmailIcon color="primary" />
                        rjb7gs@virginia.edu
                    </Typography>
                </Box>

                <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
                    <Grid item><Button
                        component="a"
                        href="https://github.com/lulukayw"
                        target="_blank"
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                    >
                        GitHub
                    </Button></Grid>
                    <Grid item><Button
                        component="a"
                        href="https://www.linkedin.com/in/lulu-wilson/"
                        target="_blank"
                        variant="outlined"
                        startIcon={<LinkedInIcon />}
                    >
                        LinkedIn
                    </Button></Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Contact