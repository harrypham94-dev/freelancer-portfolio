import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import projectsData from "../data/projects.json";
import type { ProjectsData } from "../types";

export default function Projects() {
  const data: ProjectsData = projectsData;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 3, md: 4 } }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontSize: { xs: "1.75rem", md: "2rem" } }}
        >
          {data.title}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: { xs: 3, md: 4 } }}>
          {data.description}
        </Typography>

        <Stack spacing={{ xs: 3, md: 4 }}>
          {data.projects.map((project) => (
            <Card
              key={project.title}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                height: { xs: "auto", md: 300 },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", md: 400 },
                  height: { xs: 200, md: "100%" },
                  objectFit: "cover",
                }}
                image={project.image}
                alt={project.title}
              />
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: { xs: 1, md: 2 } }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ mt: { xs: 1, md: 2 } }}
                  >
                    Challenges & Solutions:
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ mb: { xs: 1, md: 2 } }}
                  >
                    {project.challenges}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      mb: 2,
                      flexWrap: "wrap",
                      gap: 1,
                      "& > *": { mb: 1 },
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: "0.75rem",
                          height: "24px",
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: { xs: 2, md: "16px" } }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1}
                    sx={{ width: { xs: "100%", sm: "auto" } }}
                  >
                    <Button
                      fullWidth={!isDesktop}
                      startIcon={<Launch />}
                      href={project.liveDemo}
                      target="_blank"
                      variant="contained"
                      size="small"
                    >
                      Live Demo
                    </Button>
                    <Button
                      fullWidth={!isDesktop}
                      startIcon={<GitHub />}
                      href={project.sourceCode}
                      target="_blank"
                      variant="outlined"
                      size="small"
                    >
                      Source Code
                    </Button>
                  </Stack>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
