import { Box, Button, Container, Typography, Grid, Paper } from "@mui/material";
import { GitHub, LinkedIn, Download } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid>
          <Box sx={{ mt: { xs: 2, md: 8 } }}>
            <Typography variant="h1" gutterBottom>
              Professional Fullstack Developer
            </Typography>
            <Typography variant="h2" color="primary" gutterBottom>
              Turning Ideas into Reality
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Hi, I'm a passionate fullstack developer specializing in creating
              robust and scalable web applications. With expertise in both
              frontend and backend technologies, I help businesses transform
              their ideas into powerful digital solutions.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="text"
                startIcon={<GitHub />}
                href="https://github.com/yourusername"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="text"
                startIcon={<LinkedIn />}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
              >
                LinkedIn
              </Button>
              <Button
                variant="text"
                startIcon={<Download />}
                href="/path-to-your-cv.pdf"
                target="_blank"
              >
                Download CV
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Skills Overview */}
        <Grid>
          <Box sx={{ mt: { xs: 2, md: 8 } }}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h3" gutterBottom>
                Technical Expertise
              </Typography>
              <Grid container spacing={2}>
                {[
                  "Frontend Development",
                  "Backend Development",
                  "Database Design",
                  "API Development",
                  "Cloud Services",
                  "DevOps",
                ].map((skill) => (
                  <Grid key={skill}>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 2,
                        textAlign: "center",
                        bgcolor: "primary.light",
                        color: "primary.contrastText",
                      }}
                    >
                      {skill}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
