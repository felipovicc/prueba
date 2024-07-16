import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Avatar, Box, Container, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import useViewport from '../../hooks/useViewport'
import CardList from './CardList'
import Loading from '../Loading'

const pageOptions = [1, 2, 5, 10]

const defaultSearch = {
  page: 1,
  per_page: 5,
}

const columns: GridColDef[] = [
  {
    field: 'avatar',
    headerName: 'Avatar',
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

const UsersPage: React.FC = () => {
  // const [search, setSearch] = useState<SearchType>(defaultSearch)

  const { isDesktop } = useViewport()
  const { fetch, data, loading } = useFetch('users', { search: defaultSearch })

  const handlePageChange = ({ page, pageSize: per_page }: { page: number; pageSize: number }) => {
    const search = { page: per_page !== data.per_page ? 1 : page + 1, per_page }
    fetch('users', { search })
  }

  return (
    <Container>
      <Typography variant='h3' gutterBottom>
        User List
      </Typography>
      {loading || !data?.data ? (
        <Loading />
      ) : isDesktop ? (
        <DataGrid
          loading={loading}
          sx={{ minHeight: '25vh' }}
          rows={data?.data}
          columns={columns}
          pagination
          paginationMode='server'
          rowCount={data.total}
          paginationModel={{ page: data.page - 1, pageSize: data.per_page }}
          onPaginationModelChange={(paginationModel) => handlePageChange(paginationModel)}
          pageSizeOptions={pageOptions}
        />
      ) : (
        <CardList
          data={data?.data}
          loading={loading}
          page={data.page}
          pages={data.total_pages}
          handlePageChange={handlePageChange}
        />
      )}
    </Container>
  )
}

export default UsersPage
