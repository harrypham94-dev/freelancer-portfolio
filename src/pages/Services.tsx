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
import servicesData from "../data/services.json";
import type { ServicesData } from "../types";

export default function Services() {
  const data: ServicesData = servicesData;

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "Code":
        return <CodeIcon color="primary" />;
      case "Storage":
        return <StorageIcon color="primary" />;
      case "Cloud":
        return <CloudIcon color="primary" />;
      case "Api":
        return <ApiIcon color="primary" />;
      case "Assignment":
        return <AssignmentIcon color="primary" />;
      default:
        return <BuildIcon color="primary" />;
    }
  };

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
          {data.services.map((service) => (
            <Grid key={service.title}>
              <Card sx={{ height: "100%" }}>
                <CardHeader
                  avatar={getIcon(service.iconType)}
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
