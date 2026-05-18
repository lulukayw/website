import { AppBar, Box, Button, Container, Typography, Stack } from '@mui/material'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'


function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed" color="default" elevation={1}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Lulu Wilson
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button href="#home" sx={{ textTransform: 'none' }}>
                Home
              </Button>
              <Button href="#about" sx={{ textTransform: 'none' }}>
                About
              </Button>
              <Button href="#skills" sx={{ textTransform: 'none' }}>
                Skills
              </Button>
              <Button href="#projects" sx={{ textTransform: 'none' }}>
                Projects
              </Button>
              <Button href="#contact" sx={{ textTransform: 'none' }}>
                Contact
              </Button>
            </Stack>
          </Box>
        </Container>
      </AppBar>

      <Box id="home">
        <Home />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  )
}

export default App
