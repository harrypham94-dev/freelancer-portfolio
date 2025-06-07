import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { AccessTime, ArrowForward } from "@mui/icons-material";
import blogData from "../data/blog.json";
import type { BlogData } from "../types";

export default function Blog() {
  const data: BlogData = blogData;

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {data.description}
        </Typography>

        <Grid container spacing={4}>
          {data.posts.map((post) => (
            <Grid key={post.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip label={post.category} color="primary" size="small" />
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <AccessTime fontSize="small" color="action" />
                      <Typography variant="caption" color="text.secondary">
                        {post.readTime}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="h5" gutterBottom component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    endIcon={<ArrowForward />}
                    href={`/blog/${post.slug}`}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
