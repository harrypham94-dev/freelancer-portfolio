import {
  Container,
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";

export default function Contact() {
  const contactInfo = [
    {
      icon: <EmailIcon color="primary" fontSize="large" />,
      title: "Email",
      content: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <PhoneIcon color="primary" fontSize="large" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <LinkedInIcon color="primary" fontSize="large" />,
      title: "LinkedIn",
      content: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: <GitHubIcon color="primary" fontSize="large" />,
      title: "GitHub",
      content: "github.com/yourusername",
      link: "https://github.com/yourusername",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" paragraph>
          Have a project in mind? Let's discuss how we can work together to
          bring your ideas to life.
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "flex-start",
          }}
        >
          <Grid>
            <Box sx={{ position: { md: "sticky" }, top: { md: 24 } }}>
              <Stack spacing={2}>
                {contactInfo.map((info) => (
                  <Card
                    key={info.title}
                    sx={{
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: (theme) => theme.shadows[4],
                      },
                    }}
                  >
                    <CardContent>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        component="a"
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        {info.icon}
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {info.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.content}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
