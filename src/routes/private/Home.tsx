import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import CustomCard from '../../components/CustomCard'
import CustomContainer from '../../components/layout/CustomContainer'

const HomePage: React.FC = () => {
  return (
    <CustomContainer>
      <Container>
        <Typography variant='h2' gutterBottom>
          Welcome back!
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title='User list page' description='Search all available users' link='/users' />
          </Grid>
        </Grid>
      </Container>
    </CustomContainer>
  )
}

export default HomePage
