import {
  Container,
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
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
        return (
          <EmailIcon color="primary" sx={{ fontSize: { xs: 28, md: 32 } }} />
        );
      case "Phone":
        return (
          <PhoneIcon color="primary" sx={{ fontSize: { xs: 28, md: 32 } }} />
        );
      case "LinkedIn":
        return (
          <LinkedInIcon color="primary" sx={{ fontSize: { xs: 28, md: 32 } }} />
        );
      case "GitHub":
        return (
          <GitHubIcon color="primary" sx={{ fontSize: { xs: 28, md: 32 } }} />
        );
      default:
        return null;
    }
  };

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
          {data.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 3, md: 4 },
            maxWidth: 600,
          }}
        >
          {data.description}
        </Typography>

        <Stack
          spacing={{ xs: 2, md: 3 }}
          sx={{
            maxWidth: { sm: 600, md: "100%" },
            mx: "auto",
          }}
        >
          {data.contactInfo.map((info, index) => (
            <Card
              key={info.title}
              sx={{
                animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
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
                    width: "100%",
                  }}
                >
                  {getIcon(info.iconType)}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                        mb: 0.5,
                      }}
                    >
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "0.875rem", md: "1rem" },
                        color: "text.secondary",
                      }}
                    >
                      {info.content}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
