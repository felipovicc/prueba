import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { Avatar, Box, CircularProgress, Container } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const pageOptions = [1, 2, 5, 10]

type SearchType = {
  page: number
  per_page: number
}

const defaultSearch = {
  page: 0,
  per_page: 5,
}

const columns: GridColDef[] = [
  {
    field: 'avatar',
    headerName: '',
    width: 70,
    renderCell: ({ row }) => (
      <Box sx={{ m: 1 }}>
        <Avatar alt={row.first_name} src={row.avatar} />
      </Box>
    ),
  },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'first_name', headerName: 'First Name', flex: 1 },
  { field: 'last_name', headerName: 'Last Name', flex: 1 },
]

const Users: React.FC = () => {
  const [search, setSearch] = useState<SearchType>(defaultSearch)

  const { fetch, data, loading } = useFetch('users', {})

  const updateSearch = (value: Partial<typeof defaultSearch>) => setSearch((prev) => ({ ...prev, ...value }))

  const handlePaginationModelChange = ({ page, pageSize: per_page }: { page: number; pageSize: number }) => {
    const search = { page, per_page }
    updateSearch(search)
    fetch('users', { search })
  }

  if (loading)
    return (
      <Box>
        <CircularProgress />
      </Box>
    )

  if (!data?.data) return <p>No data to display</p>

  return (
    <Container fixed>
      <div>
        <DataGrid
          rows={data.data}
          columns={columns}
          pagination
          paginationMode='server'
          rowCount={data.total} // Assuming your API returns the total count of items
          paginationModel={{ page: search.page, pageSize: search.per_page }}
          onPaginationModelChange={(paginationModel) => handlePaginationModelChange(paginationModel)}
          pageSizeOptions={pageOptions}
          loading={loading}
        />
      </div>
    </Container>
  )
}

export default Users
