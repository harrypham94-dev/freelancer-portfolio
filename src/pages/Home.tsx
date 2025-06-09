import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchHomeData } from "../services/api";
import type { HomeData } from "../types";
import Loading from "../components/common/Loading";

export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchHomeData();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch home data:", error);
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
              align="justify"
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                mb: 4,
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
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
