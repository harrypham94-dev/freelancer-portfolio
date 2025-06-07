import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import projectsData from "../data/projects.json";
import type { ProjectsData } from "../types";

export default function Projects() {
  const data: ProjectsData = projectsData;

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {data.description}
        </Typography>

        <Grid container spacing={4}>
          {data.projects.map((project) => (
            <Grid key={project.title}>
              <Card sx={{ display: { sm: "flex" }, height: { sm: 300 } }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: { sm: 400 },
                    height: { xs: 200, sm: 300 },
                    objectFit: "cover",
                  }}
                  image={project.image}
                  alt={project.title}
                />
                <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {project.description}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Challenges & Solutions:
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {project.challenges}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip key={tech} label={tech} size="small" />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button
                      startIcon={<Launch />}
                      href={project.liveDemo}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                    <Button
                      startIcon={<GitHub />}
                      href={project.sourceCode}
                      target="_blank"
                    >
                      Source Code
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
