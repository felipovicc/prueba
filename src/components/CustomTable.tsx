import { Container } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'

const pageOptions = [1, 2, 5, 10, 20]

export type PaginationType = {
  page: number
  per_page: number
}

type Props = {
  columns: GridColDef[]
  data?: object[]
  total?: number
  search?: never
  loading?: boolean
  pagination: PaginationType
  handlePageChange: CallableFunction
}

const CustomTable = ({ loading, data, columns, pagination, total, handlePageChange }: Props) => {
  console.log(pagination)
  return (
    <Container fixed>
      <DataGrid
        loading={loading}
        sx={{ minHeight: '25vh' }}
        rows={data || []}
        columns={columns}
        paginationMode='server'
        rowCount={total}
        paginationModel={{ page: pagination?.page, pageSize: pagination?.per_page }}
        onPaginationModelChange={(params) => handlePageChange(params)}
        pageSizeOptions={pageOptions}
      />
    </Container>
  )
}

export default CustomTable
