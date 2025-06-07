import { Container, Typography, Box, Grid, Paper } from "@mui/material";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Next.js",
        "CSS/SASS",
      ],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "Django", "PHP"],
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      category: "DevOps",
      technologies: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          About Me
        </Typography>

        <Typography variant="body1" paragraph>
          I am a passionate fullstack developer with extensive experience in
          building modern web applications. My journey in software development
          started with a curiosity about how things work on the internet, which
          led me to dive deep into both frontend and backend technologies.
        </Typography>

        <Typography variant="body1" paragraph>
          With over X years of experience in the industry, I've had the
          opportunity to work on various challenging projects that have helped
          me develop a comprehensive understanding of the software development
          lifecycle.
        </Typography>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h3" gutterBottom>
            Technical Skills
          </Typography>
          <Grid container spacing={3}>
            {skills.map((skillSet) => (
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
            {[
              {
                title: "Clean Code",
                description:
                  "Writing maintainable and scalable code that follows best practices.",
              },
              {
                title: "User Experience",
                description:
                  "Creating intuitive and responsive interfaces that users love.",
              },
              {
                title: "Performance",
                description:
                  "Optimizing applications for speed and efficiency.",
              },
              {
                title: "Security",
                description:
                  "Implementing robust security measures to protect user data.",
              },
            ].map((value) => (
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
