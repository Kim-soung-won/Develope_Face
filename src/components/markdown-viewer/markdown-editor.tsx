'use client' // 이 컴포넌트는 클라이언트에서 동작해야 하므로 'use client' 명시

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Box, Grid } from '@mui/material'
import {
  MarkDownFormUI,
  MarkDownPreviewUI,
  MarkdownSyntaxToolbar,
} from './content'

const MarkdownEditor: React.FC = () => {
  const [markdownInput, setMarkdownInput] = useState<string>('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownInput(event.target.value)
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 1, sm: 2 },
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MarkdownSyntaxToolbar
        textareaRef={textareaRef}
        markdownInput={markdownInput}
        setMarkdownInput={setMarkdownInput}
      />
      <Grid
        container
        spacing={{ xs: 1, sm: 2 }}
        sx={{ flexGrow: 1, overflow: 'hidden' }}
      >
        {/* 왼쪽: 마크다운 입력창 */}
        <Grid
          size={6}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <MarkDownFormUI
            textareaRef={textareaRef}
            text={markdownInput}
            onChange={handleInputChange}
          />
        </Grid>

        {/* 오른쪽: 미리보기 영역 */}
        <Grid
          size={6}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <MarkDownPreviewUI markdownInput={markdownInput} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default MarkdownEditor
