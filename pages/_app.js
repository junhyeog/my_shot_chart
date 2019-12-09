import React from 'react';
import { Container } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components'


const Layout = ({ Component }) => {
  return (
    <Container>
      <Head>
        <title>Shot Chart</title>
        <link rel="icon" type="image/x-icon" href="/static/titleIcon.png" />

      </Head>
      <Component />
      <GlobalStyle />
    </Container>);
}

export default Layout;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
