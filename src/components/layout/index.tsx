import React from 'react'
import Nav from './nav'
import Content from './content'
import Footer from './footer'
import { Container, Grid } from '@mui/material'

const Layout: React.FC = () => {
  return (
    <Container fixed>
      <Grid container gap={2}>
        <Nav />
        <Content />
        <Footer />
      </Grid>
    </Container>
  )
}

export default Layout
