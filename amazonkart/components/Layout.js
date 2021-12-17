import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const { navbar, main, footer } = useStyles();
  return (
    <div>
      <Head>
        <title>Amazonkart - ©️ </title>
      </Head>
      <AppBar position="static" className={navbar}>
        <Toolbar>
          <Typography>
            Amazonkart
          </Typography>
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
