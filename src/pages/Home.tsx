import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { GitHub, LinkedIn, Download } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import homeData from "../data/home.json";
import type { HomeData } from "../types";

export default function Home() {
  const navigate = useNavigate();
  const data: HomeData = homeData;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Main Content */}
          <Box sx={{ flex: { md: 2 } }}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: "bold",
                mb: 2,
              }}
            >
              {data.hero.title}
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                mb: 3,
              }}
            >
              {data.hero.subtitle}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                mb: 4,
                maxWidth: "600px",
              }}
            >
              {data.hero.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 4,
                flexDirection: { xs: "column", sm: "row" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                size="large"
                fullWidth={isMobile}
                onClick={() => navigate("/projects")}
                sx={{ minWidth: { xs: "100%", sm: "160px" } }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                fullWidth={isMobile}
                onClick={() => navigate("/contact")}
                sx={{ minWidth: { xs: "100%", sm: "160px" } }}
              >
                Contact Me
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <Button
                variant="text"
                startIcon={<GitHub />}
                href={data.hero.socialLinks.github}
                target="_blank"
                sx={{ minWidth: { xs: "100%", sm: "auto" } }}
              >
                GitHub
              </Button>
              <Button
                variant="text"
                startIcon={<LinkedIn />}
                href={data.hero.socialLinks.linkedin}
                target="_blank"
                sx={{ minWidth: { xs: "100%", sm: "auto" } }}
              >
                LinkedIn
              </Button>
              <Button
                variant="text"
                startIcon={<Download />}
                href={data.hero.socialLinks.cv}
                target="_blank"
                sx={{ minWidth: { xs: "100%", sm: "auto" } }}
              >
                Download CV
              </Button>
            </Box>
          </Box>

          {/* Technical Expertise */}
          <Box sx={{ flex: { md: 1 } }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: "background.default",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" } }}
              >
                Technical Expertise
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "1fr",
                  },
                }}
              >
                {data.skills.map((skill) => (
                  <Paper
                    key={skill}
                    elevation={1}
                    sx={{
                      p: 2,
                      textAlign: "center",
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    {skill}
                  </Paper>
                ))}
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
