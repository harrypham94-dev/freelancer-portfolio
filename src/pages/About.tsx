import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import aboutData from "../data/about.json";
import type { AboutData } from "../types";

export default function About() {
  const data: AboutData = aboutData;

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          {data.introduction.title}
        </Typography>

        {data.introduction.description.map((paragraph, index) => (
          <Typography key={index} variant="body1" paragraph>
            {paragraph}
          </Typography>
        ))}

        <Box sx={{ mt: 6 }}>
          <Typography variant="h3" gutterBottom>
            Technical Skills
          </Typography>
          <Grid container spacing={3}>
            {data.skills.map((skillSet) => (
              <Grid key={skillSet.category}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {skillSet.category}
                  </Typography>
                  {skillSet.technologies.map((tech) => (
                    <Typography key={tech} variant="body2" sx={{ py: 0.5 }}>
                      • {tech}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h3" gutterBottom>
            Core Values
          </Typography>
          <Grid container spacing={3}>
            {data.coreValues.map((value) => (
              <Grid key={value.title}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2">{value.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
