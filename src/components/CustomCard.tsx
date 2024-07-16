import styled from '@emotion/styled'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const StyledCard = styled(Card)({
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  maxWidth: 345,
  margin: '20px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.10)',
  },
})

type Props = {
  link?: string
  description?: string
  title?: string
  children?: React.ReactNode
}

const CustomCard = ({ link, children, title, description, ...props }: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (link) navigate(link)
  }
  return (
    <StyledCard {...props} onClick={handleClick}>
      <CardMedia sx={{ height: 140 }} image={`${process.env.PUBLIC_URL}/users.jpg`} title='User list' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {description}
        </Typography>
        {children}
      </CardContent>
    </StyledCard>
  )
}

export default CustomCard
