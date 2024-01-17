import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardContent,
} from "@mui/material";
import { productList } from "../constant/products";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: "calc(2rem + 3px)" }}>
      <Grid container spacing={2}>
        {productList.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <Card>
                <CardMedia
                  component="img"
                  sx={{ height: 340 }}
                  title={item.name}
                  image={item.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
