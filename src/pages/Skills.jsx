import { Container, Box, Typography, Paper, Grid, List, ListItem } from '@mui/material';

function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Python', 'Java', 'JavaScript', 'C', 'SQL', 'HTML / CSS']
        },
        {
            title: 'Technologies & Tools',
            skills: ['React', 'Git & GitHub', 'REST APIs', 'Django', 'JUnit', 'LaTeX']
        },
        {
            title: 'Mathematics',
            skills: ['Linear Algebra', 'Discrete Mathematics', 'Probability & Statistics', 'Algorithms Analysis']
        }
    ];

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Box>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                    Skills
                </Typography>
                <Grid container spacing={3}>
                    {skillCategories.map((category, index) => (
                        <Grid item key={index}>
                            <Paper elevation={2} sx={{ p: 3, height: '100%', transition: 'transform .3s, box-shadow .3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                    {category.title}
                                </Typography>
                                <List sx={{ p: 0 }}>
                                    {category.skills.map((skill, idx) => (
                                        <ListItem key={idx} sx={{ py: 0.3, px: 0 }}>
                                            <Typography variant="body1" color="textSecondary">
                                                {skill}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Skills
