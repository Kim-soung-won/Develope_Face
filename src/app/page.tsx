import { Button, Typography } from '@mui/material'
import { TopMenuBar } from '@/layout/topbar'
import { PostQuery } from '@/shared/db/post'

export default async function Home() {
  const data = await PostQuery.getAll()
  console.log('Query : ', data)
  return (
    <>
      <TopMenuBar />
      <Button>{data[0].title}</Button>
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
