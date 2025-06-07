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
import contactData from "../data/contact.json";
import type { ContactData } from "../types";

export default function Contact() {
  const data: ContactData = contactData;

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "Email":
        return <EmailIcon color="primary" fontSize="large" />;
      case "Phone":
        return <PhoneIcon color="primary" fontSize="large" />;
      case "LinkedIn":
        return <LinkedInIcon color="primary" fontSize="large" />;
      case "GitHub":
        return <GitHubIcon color="primary" fontSize="large" />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {data.description}
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
                {data.contactInfo.map((info) => (
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
                        {getIcon(info.iconType)}
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
