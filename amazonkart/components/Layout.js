import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ title, description ,children }) {
  const { navbar, main, footer, brand, grow } = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Amazonkart - ©️`: 'Amazonkart - ©️'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={brand}>
                amazonkart
              </Typography>
            </Link>
          </NextLink>
          <div className={grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={main}>
        { children }
      </Container>
      <footer className={footer}>
        All rights reserved ©️ - Amazonkart.
      </footer>
    </div>
  )
}
