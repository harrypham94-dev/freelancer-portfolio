import { Container, Typography, Box, Paper, Stack, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchAboutData } from "../services/api";
import type { AboutData } from "../types";
import Loading from "../components/common/Loading";

export default function About() {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchAboutData();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 3, md: 4 } }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", md: "2rem" },
            mb: { xs: 2, md: 3 },
          }}
        >
          {data.introduction.title}
        </Typography>

        <Stack spacing={2} sx={{ mb: { xs: 4, md: 6 } }}>
          {data.introduction.description.map((paragraph, index) => (
            <Typography
              align="justify"
              key={index}
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Stack>

        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", md: "1.75rem" },
              mb: { xs: 2, md: 3 },
            }}
          >
            Technical Skills
          </Typography>
          <Grid container columnSpacing={5} rowSpacing={3}>
            {data.skills.map((skillSet) => (
              <Paper
                key={skillSet.category}
                sx={{
                  p: { xs: 2, md: 3 },
                  flex: {
                    xs: "1 1 100%",
                    sm: "1 1 calc(50% - 16px)",
                    md: "1 1 calc(25% - 24px)",
                  },
                  minWidth: { sm: "calc(50% - 16px)", md: "calc(25% - 24px)" },
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
                elevation={2}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  {skillSet.category}
                </Typography>
                <Stack spacing={1}>
                  {skillSet.technologies.map((tech) => (
                    <Typography
                      key={tech}
                      variant="body2"
                      sx={{
                        fontSize: { xs: "0.875rem", md: "1rem" },
                        color: "text.secondary",
                      }}
                    >
                      • {tech}
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            ))}
          </Grid>
        </Box>

        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", md: "1.75rem" },
              mb: { xs: 2, md: 3 },
            }}
          >
            Core Values
          </Typography>
          <Grid container spacing={3}>
            {data.coreValues.map((value) => (
              <Paper
                key={value.title}
                sx={{
                  p: { xs: 2, md: 3 },
                  flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)" },
                  minWidth: { sm: "calc(50% - 16px)" },
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
                elevation={2}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    mb: { xs: 1, md: 1.5 },
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    color: "text.secondary",
                  }}
                >
                  {value.description}
                </Typography>
              </Paper>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
