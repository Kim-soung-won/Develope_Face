"use client";
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggleSwitch from '@/components/ThemeToggleSwitch';
import { useTranslation } from 'react-i18next';
import { LoadingCircleSpinner } from '@/stared/ui';

export function TopMenuBar() {
  const { t } = useTranslation();
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        {/* 좌측: 메뉴 아이콘 */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        {/* 서비스명 또는 로고 */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyService
        </Typography>
        {/* 우측: 로그인/회원가입 등 버튼 */}
        <ThemeToggleSwitch />
        <Button color="inherit">{t("button.login")}</Button>
        <Button color="inherit">{t("button.signup")}</Button>
        <LoadingCircleSpinner />
      </Toolbar>
    </AppBar>
  );
}