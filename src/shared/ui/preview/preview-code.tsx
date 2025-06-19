'use client'

import { Font } from '@/shared/constants'
import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material'
import { highlight, languages } from 'prismjs'
import Editor from 'react-simple-code-editor'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-jsx'

interface PreviewCodeCompProps {
  examCode: string
}

export const PreviewCodeInCompPage = ({ examCode }: PreviewCodeCompProps) => {
  const isDark: boolean = useTheme().palette.mode === 'dark'

  const editorStyle: React.CSSProperties = {
    fontFamily: Font.JetbrainsMono.style.fontFamily,
    fontSize: 16,
    backgroundColor: isDark ? '#272822' : '#f5f5f5',
    borderRadius: '8px',
    minHeight: '400px',
    overflow: 'auto',
    outline: 'none',
  }

  return (
    <Grid size={12}>
      <style>{isDark ? Font.PrismDarkheme : Font.PrismLightTheme}</style>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            코드
          </Typography>
          <Editor
            value={examCode.trim()}
            onValueChange={() => {}}
            highlight={(code) => highlight(code, languages.jsx, 'jsx')}
            padding={16}
            style={{
              ...editorStyle,
              backgroundColor: isDark ? '#272822' : '#f5f5f5',
            }}
            readOnly
          />
        </CardContent>
      </Card>
    </Grid>
  )
}
