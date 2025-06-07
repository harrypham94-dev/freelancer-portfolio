import { Box, Button, Container, Typography, Grid, Paper } from "@mui/material";
import { GitHub, LinkedIn, Download } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import homeData from "../data/home.json";
import type { HomeData } from "../types";

export default function Home() {
  const navigate = useNavigate();
  const data: HomeData = homeData;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid>
          <Box sx={{ mt: { xs: 2, md: 8 } }}>
            <Typography variant="h1" gutterBottom>
              {data.hero.title}
            </Typography>
            <Typography variant="h2" color="primary" gutterBottom>
              {data.hero.subtitle}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              {data.hero.description}
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
                href={data.hero.socialLinks.github}
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="text"
                startIcon={<LinkedIn />}
                href={data.hero.socialLinks.linkedin}
                target="_blank"
              >
                LinkedIn
              </Button>
              <Button
                variant="text"
                startIcon={<Download />}
                href={data.hero.socialLinks.cv}
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
                {data.skills.map((skill) => (
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
