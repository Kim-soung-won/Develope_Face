"use client"
import { Box, useTheme } from "@mui/material";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import React from "react";

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="code"
      sx={{
        fontFamily: 'Monospace',
        fontSize: '0.875rem',
        px: 1,
        py: 0.5,
        borderRadius: 1,
      }}
    >
      {children}
    </Box>
  )
}


export function Pre({ children }: { children: React.ReactNode }) {
  const theme = useTheme()

  // children은 <code className="language-xxx">...</code> 이런 형태임
  // typescript 언어 감지용
  const child = React.Children.only(children) as React.ReactElement<{ className?: string; children: string }>
  const className = child.props.className || ''
  const match = className.match(/language-(\w+)/)
  const language = match ? match[1] : ''

  console.log("theme : ", theme.palette.mode)

  return (
    <Box sx={{ my: 2, borderRadius: 2, overflowX: 'auto' }}>
      <SyntaxHighlighter
        language={language}
        style={theme.palette.mode === 'dark' ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          backgroundColor: theme.palette.mode === 'dark' ? '#282c34' : '#fafafa',
          fontFamily: 'Monospace',
          fontSize: '0.875rem',
          padding: '16px',
          borderRadius: '8px',
        }}
        PreTag="div"
      >
        {child.props.children.trim()}
      </SyntaxHighlighter>
    </Box>
  )
}