import { Container, Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { GitHub as GitHubIcon } from '@mui/icons-material';

function Projects() {
    const projects = [
        {
            title: 'Wikipedia Path Finder',
            description: 'Wikipedia Path Finder is a command-line application that computes the shortest link path between two Wikipedia pages. It preprocesses Wikipedia link data into a graph using rustworkx and applies Dijkstra\'s algorithm to efficiently determine the minimum number of hops between pages, recreating the logic behind the classic Wikipedia path game.',
            link: 'https://github.com/lulukayw/wiki-game'
        },
        {
            title: 'HooWantsSome',
            description: 'Hoowantsome is a Django-based web application built by a five-person team to promote sustainable item exchange among UVA students. Inspired by platforms like Facebook Marketplace and Depop, the app supports authentication, messaging, listings, and moderation; I focused on global notifications, quality assurance and testing (acting as QA lead), and UI development to ensure a reliable user experience.',
            link: 'https://github.com/lulukayw/hoowantssome'
        }
    ];

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
                Projects
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {projects.map((project, index) => (
                    <Card key={index} elevation={2} sx={{ transition: 'transform .3s, box-shadow .3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.7 }}>
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                component="a"
                                href={project.link}
                                target="_blank"
                                startIcon={<GitHubIcon />}
                                variant="text"
                            >
                                View on GitHub
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>
    );
}

export default Projects