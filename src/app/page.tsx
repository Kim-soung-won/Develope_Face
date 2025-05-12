import { Typography } from '@mui/material'
import { TopMenuBar } from '@/layout/topbar'
import { PostQuery } from '@/stared/db/post'

export default async function Home() {
  const data = await PostQuery.getAll()
  console.log('Query : ', data)
  return (
    <>
      <TopMenuBar />
      <Typography
        variant="h1"
        sx={{
          height: '10000px',
        }}
      >
        hello
      </Typography>
    </>
  )
}
