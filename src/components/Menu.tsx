import React, { useEffect, useState } from 'react'
import { Button, Drawer, Box, List, ListItemText, ListSubheader, ListItemButton, ListItemIcon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import { useAuth } from '../context/auth'
import useViewport from '../hooks/useViewport'
import { useNavigate } from 'react-router-dom'
import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'

const Menu = () => {
  const navigate = useNavigate()
  const viewport = useViewport()
  const {
    state,
    actions: { logout },
  } = useAuth()

  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = (value?: boolean) => () => setOpen((prev) => value ?? !prev)

  const goTo = (path?: string) => () => {
    if (path) {
      navigate(path)
      setOpen(false)
    }
  }

  useEffect(() => {
    setOpen(false)
  }, [])

  if (!state.loggedIn) return null

  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <Button variant='outlined' onClick={toggleDrawer()} hidden={viewport.isDesktop}>
        <MenuIcon />
        <span hidden={!viewport.isDesktop}>Menu</span>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        <List>
          <ListSubheader component='div' id='nested-list-subheader'>
            <ListItemText primary='Navigation' />
            <ListItemButton onClick={goTo('/')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
            <ListItemButton onClick={goTo('/users')}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary='Users' />
            </ListItemButton>
          </ListSubheader>
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  )
}

export default Menu
