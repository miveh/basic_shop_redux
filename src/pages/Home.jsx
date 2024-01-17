import React from "react";
import { Container, Box, Grid } from "@mui/material";
import { productList } from "../constant/products";
import { ProductCard } from "../components/product-card/ProductCard";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: "calc(2rem + 3px)" }}>
      <Grid container spacing={2}>
        {productList.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <ProductCard item={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
