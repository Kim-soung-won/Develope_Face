'use client'
import { Box, useTheme } from '@mui/material'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import React from 'react'

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

// Pre 컴포넌트 수정
export function Pre({ children }: { children: React.ReactNode }) {
  const theme = useTheme() // 테마는 배경색 등에 활용 가능

  // MDX는 <pre><code>...</code></pre> 구조를 생성하고,
  // 여기서 `children` prop은 <code> 엘리먼트와 그 안의 (이미 스타일링된) 내용이 됨.
  // rehype-pretty-code가 이미 내부를 <span class="..."> 등으로 처리했을 거야.
  return (
    <Box
      component="pre" // 시맨틱하게 <pre> 태그 사용
      sx={{
        my: 2,
        borderRadius: 2, // <pre> 태그의 전체적인 스타일
        overflowX: 'auto',
        backgroundColor: theme.palette.mode === 'dark' ? '#282c34' : '#f5f5f5', // 테마에 맞는 배경색
        padding: '16px',
        fontSize: '0.875rem', // 폰트 크기
        fontFamily: 'Monospace', // 폰트
        // rehype-pretty-code에서 생성된 스타일과 충돌하지 않도록 주의
      }}
    >
      {children} {/* `children`은 이미 구문 강조된 <code> 엘리먼트와 그 내용 */}
    </Box>
  )
}
