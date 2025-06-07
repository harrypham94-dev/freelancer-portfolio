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

export default function Blog() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      date: "2025-06-01",
      excerpt:
        "Learn how to leverage TypeScript to build more maintainable and scalable React applications. We'll cover best practices, common pitfalls, and advanced patterns.",
      image: "/blog-react-ts.jpg",
      category: "Frontend",
      readTime: "8 min read",
      slug: "building-scalable-react-apps",
    },
    {
      title: "Optimizing Database Performance in Production",
      date: "2025-05-28",
      excerpt:
        "Discover practical techniques for optimizing database performance in production environments. From indexing strategies to query optimization.",
      image: "/blog-database.jpg",
      category: "Backend",
      readTime: "12 min read",
      slug: "database-optimization",
    },
    {
      title: "Implementing Secure Authentication with JWT",
      date: "2025-05-25",
      excerpt:
        "A comprehensive guide to implementing secure authentication using JSON Web Tokens (JWT) in your web applications.",
      image: "/blog-auth.jpg",
      category: "Security",
      readTime: "10 min read",
      slug: "secure-authentication-jwt",
    },
    {
      title: "Modern CSS Techniques for Better Responsive Design",
      date: "2025-05-22",
      excerpt:
        "Explore modern CSS techniques like Grid, Flexbox, and Container Queries to create truly responsive and maintainable layouts.",
      image: "/blog-css.jpg",
      category: "CSS",
      readTime: "6 min read",
      slug: "modern-css-techniques",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1" paragraph>
          Sharing knowledge and experiences about web development, best
          practices, and industry insights.
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
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
