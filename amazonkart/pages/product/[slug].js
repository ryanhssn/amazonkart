import React from 'react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Image from 'next/image';
import { Link, Grid, List, ListItem, Typography, Card, Button } from '@material-ui/core';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import useStyles from '../../utils/styles';

export default function SingleProductPage() {
  const { section } = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find(a => a.slug === slug);
  if (!product) return <div>Product not found!!!!!</div>
  return (
    <Layout title={product.name} description={product.description}>
      <div className={section}>
        <NextLink href="/" passHref>
          <Link>
            back to homepage.
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image src={product.image} alt={product.name} width={640} height={640} layout="responsive" />
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem><Typography component="h1">{product.name}</Typography></ListItem>
            <ListItem>Category: {product.category}</ListItem>
            <ListItem>Brand: {product.brand}</ListItem>
            <ListItem>Rating: {product.rating} stars ({product.reviews} reviews) </ListItem>
            <ListItem><Typography>{product.description}</Typography></ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}><Typography>Price: </Typography></Grid>
                  <Grid item xs={6}><Typography><span>AED </span>{product.price}</Typography></Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}><Typography>Status: </Typography></Grid>
                  <Grid item xs={6}><Typography>{product.stock > 0 ? 'In Stock' : 'Out of stock'}</Typography></Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add to cart   
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
