'use client'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ThemeToggleSwitch from '@/components/ThemeToggleSwitch'

export function TopMenuBar() {
  const { t } = useTranslation()
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        {/* 좌측: 메뉴 아이콘 */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        {/* 서비스명 또는 로고 */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            MyService
          </Link>
        </Typography>
        {/* 우측: 로그인/회원가입 등 버튼 */}
        <ThemeToggleSwitch />
        <Button color="inherit">
          <Link href="/posting">글쓰기</Link>
        </Button>
        <Button color="inherit">
          <Link href="/blog">POST</Link>
        </Button>
        {/* <Button color="inherit">{t('button.signup')}</Button> */}
      </Toolbar>
    </AppBar>
  )
}
