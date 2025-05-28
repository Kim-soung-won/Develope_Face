import { Button, Typography } from '@mui/material'
import { TopMenuBar } from '@/layout/topbar'
import { PostQuery } from '@/shared/db/post'

export default async function Home() {
  return (
      <Typography
        variant="h1"
        sx={{
          height: '10000px',
        }}
      >
        hello
      </Typography>
  )
}
