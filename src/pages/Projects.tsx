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

export default function Projects() {
  const projects = [
    {
      title: "Task Management System",
      description:
        "A comprehensive project management tool similar to Jira, featuring task tracking, user assignments, and real-time updates.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveDemo: "https://demo-task-manager.com",
      sourceCode: "https://github.com/yourusername/task-manager",
      challenges:
        "Implementing real-time updates while maintaining application performance was a key challenge.",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online store with product management, shopping cart, and secure payment integration.",
      image: "/project2.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveDemo: "https://demo-ecommerce.com",
      sourceCode: "https://github.com/yourusername/ecommerce",
      challenges:
        "Ensuring secure payment processing and optimizing the checkout flow for better conversion rates.",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "/project3.jpg",
      technologies: ["React", "D3.js", "Express", "Redis"],
      liveDemo: "https://demo-dashboard.com",
      sourceCode: "https://github.com/yourusername/dashboard",
      challenges:
        "Processing and visualizing large datasets while maintaining smooth user experience.",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          Featured Projects
        </Typography>
        <Typography variant="body1" paragraph>
          Here are some of the projects I've worked on. Each project
          demonstrates different aspects of my technical skills and
          problem-solving abilities.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
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
