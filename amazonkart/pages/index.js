import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, CardActions, Button } from '@material-ui/core'
import NextLink from 'next/link';
import Layout from '../components/Layout'
import data from '../utils/data';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map(product => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia component="img" image={product.image} title={product.name}></CardMedia>
                    <CardContent>
                      <Typography>
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>
                    AED {product.price}
                  </Typography>
                  <Button color="primary" size="small">
                    Add to cart 🛒
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
