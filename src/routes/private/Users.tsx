import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { Box, CircularProgress } from '@mui/material'

const defaultSearch = {
  page: 1,
  per_page: 20,
}

const Users: React.FC = () => {
  const [search, setSearch] = useState(defaultSearch)

  const { data, loading, error } = useFetch('users', { search })

  console.log(data, loading, error)
  return <Box>{loading ? <CircularProgress /> : <Box></Box>}</Box>
}

export default Users
