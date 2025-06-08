import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Api as ApiIcon,
  Build as BuildIcon,
  Assignment as AssignmentIcon,
  CheckCircle as CheckIcon,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { fetchServicesData } from "../services/api";
import type { ServicesData } from "../types";
import Loading from "../components/common/Loading";

export default function Services() {
  const [data, setData] = useState<ServicesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchServicesData();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch services data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

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

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 3, md: 4 } }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontSize: { xs: "1.75rem", md: "2rem" } }}
        >
          Services
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: { xs: 3, md: 4 } }}>
          I offer a comprehensive range of web development services to help
          bring your ideas to life. Each service is tailored to meet your
          specific needs and requirements.
        </Typography>

        <Stack spacing={{ xs: 2, md: 3 }}>
          {data.services.map((service) => (
            <Card
              key={service.title}
              sx={{
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardHeader
                avatar={getIcon(service.iconType)}
                title={
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                  >
                    {service.title}
                  </Typography>
                }
                sx={{ pb: 0 }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {service.description}
                </Typography>
                <List dense sx={{ pl: 0 }}>
                  {service.features.map((feature) => (
                    <ListItem
                      key={feature}
                      sx={{
                        px: 0,
                        py: 0.5,
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon
                          fontSize="small"
                          color="primary"
                          sx={{ width: 20, height: 20 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          variant: "body2",
                          sx: { fontSize: { xs: "0.875rem", md: "1rem" } },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
