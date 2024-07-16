import styled from '@emotion/styled'
import { Container } from '@mui/material'

const CustomContainer = styled(Container)({
  display: 'flex',
  justifyItems: 'center',
  flexGrow: 1,
  margin: ' 2rem',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url(https://source.unsplash.com/random)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

export default CustomContainer
