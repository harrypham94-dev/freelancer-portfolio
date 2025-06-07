import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Api as ApiIcon,
  Build as BuildIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      icon: <CodeIcon color="primary" />,
      description: "Building responsive and interactive user interfaces",
      features: [
        "React/Next.js Applications",
        "Angular Development",
        "Vue.js Solutions",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend Development",
      icon: <StorageIcon color="primary" />,
      description: "Creating robust and scalable server-side solutions",
      features: [
        "Node.js/Express Applications",
        "Python/Django Solutions",
        "PHP/Laravel Development",
        "RESTful API Design",
        "Authentication & Authorization",
      ],
    },
    {
      title: "Database Design",
      icon: <StorageIcon color="primary" />,
      description: "Optimizing data storage and retrieval",
      features: [
        "Database Architecture",
        "SQL Optimization",
        "NoSQL Solutions",
        "Data Migration",
        "Performance Tuning",
      ],
    },
    {
      title: "Cloud Services",
      icon: <CloudIcon color="primary" />,
      description: "Deploying and managing cloud infrastructure",
      features: [
        "AWS Solutions",
        "Google Cloud Platform",
        "Azure Services",
        "Server Configuration",
        "Cloud Migration",
      ],
    },
    {
      title: "API Development",
      icon: <ApiIcon color="primary" />,
      description: "Creating and integrating APIs",
      features: [
        "RESTful API Design",
        "GraphQL Implementation",
        "API Documentation",
        "Integration Testing",
        "Performance Monitoring",
      ],
    },
    {
      title: "Technical Consulting",
      icon: <AssignmentIcon color="primary" />,
      description: "Providing expert technical guidance",
      features: [
        "Architecture Planning",
        "Technology Selection",
        "Code Review",
        "Best Practices",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          Services
        </Typography>
        <Typography variant="body1" paragraph>
          I offer a comprehensive range of web development services to help
          bring your ideas to life. Each service is tailored to meet your
          specific needs and requirements.
        </Typography>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.title}>
              <Card sx={{ height: "100%" }}>
                <CardHeader
                  avatar={service.icon}
                  title={service.title}
                  titleTypographyProps={{ variant: "h6" }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <List dense>
                    {service.features.map((feature) => (
                      <ListItem key={feature}>
                        <ListItemIcon>
                          <BuildIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
