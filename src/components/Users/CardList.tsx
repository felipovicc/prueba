import React from 'react'

import {
  Container,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Pagination,
  Box,
  CircularProgress,
} from '@mui/material'
import { StyledCard } from '../CustomCard'

interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

type Props = {
  data?: User[]
  loading?: boolean
  page: number
  handlePageChange: CallableFunction
  pages: number
}

const UserCard: React.FC<{ user: User }> = ({ user }: { user: User }) => {
  return (
    <StyledCard>
      <CardMedia>
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <Avatar alt={user.first_name} src={user.avatar} sx={{ width: 120, height: 120 }} />
        </Box>
      </CardMedia>
      <CardContent sx={{ bgcolor: 'rgba(0,0,0,0.05)' }}>
        <Typography gutterBottom variant='h5' component='div'>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {user.email}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

const CardList = ({ data = [], loading, handlePageChange, page, pages }: Props) => {
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    handlePageChange({ page, perPage: pages })
  }

  return (
    <Container>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={4}>
            {data.map((user) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <UserCard user={user} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Pagination count={pages} page={page} onChange={handleChange} color='primary' />
          </Box>
        </>
      )}
    </Container>
  )
}

export default CardList
