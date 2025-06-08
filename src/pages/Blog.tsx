import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AccessTime, ArrowForward } from "@mui/icons-material";
import blogData from "../data/blog.json";
import type { BlogData } from "../types";

export default function Blog() {
  const data: BlogData = blogData;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 3, md: 4 } }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontSize: { xs: "1.75rem", md: "2rem" } }}
        >
          {data.title}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: { xs: 3, md: 4 } }}>
          {data.description}
        </Typography>

        <Stack spacing={{ xs: 2, md: 3 }}>
          {data.posts.map((post) => (
            <Card
              key={post.title}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", md: 280 },
                  height: { xs: 200, md: "auto" },
                  objectFit: "cover",
                }}
                image={post.image}
                alt={post.title}
              />
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <CardContent sx={{ flex: "1 0 auto", p: { xs: 2, md: 3 } }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    sx={{ mb: 2 }}
                  >
                    <Chip
                      label={post.category}
                      color="primary"
                      size="small"
                      sx={{ fontSize: "0.75rem" }}
                    />
                    <Stack
                      direction="row"
                      spacing={0.5}
                      alignItems="center"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.75rem",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "1rem" }} />
                      <Typography variant="caption">{post.readTime}</Typography>
                    </Stack>
                  </Stack>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      mb: { xs: 1, md: 2 },
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: { xs: 1, md: 2 } }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mb: 2 }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: { xs: 2, md: 3 }, pt: 0 }}>
                  <Button
                    endIcon={<ArrowForward />}
                    href={`/blog/${post.slug}`}
                    variant="outlined"
                    fullWidth={isMobile}
                    size="small"
                  >
                    Read More
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
