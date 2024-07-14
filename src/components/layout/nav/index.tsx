import { Button, Container, Drawer, Grid } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import useViewport from '../../../hooks/useViewport'
import { useAuth } from '../../../context/auth'
import LogoutIcon from '@mui/icons-material/Logout'
import User from '../../User'
import Flex from '../Flex'

const Nav = () => {
  const viewport = useViewport()
  const {
    state,
    actions: { logout },
  } = useAuth()

  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = () => setOpen((prev) => !prev)

  return (
    <Container sx={{ py: 2, px: 4 }} className='nav-container'>
      <Flex justifyContent='flex-end'>
        <User username={state.user || ''} hidden={!state.loggedIn} />
        {state.loggedIn && (
          <Button variant='outlined' onClick={logout} sx={{ mx: 1 }}>
            <LogoutIcon />
            Logout
          </Button>
        )}
        <Button variant='outlined' onClick={toggleDrawer} hidden={viewport.isDesktop}>
          <MenuIcon />
          <span hidden={!viewport.isDesktop}>Menu</span>
        </Button>
      </Flex>
      <Drawer open={open} onClose={toggleDrawer}></Drawer>
    </Container>
  )
}

export default Nav
