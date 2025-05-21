'use client' // 이 컴포넌트는 클라이언트에서 동작해야 하므로 'use client' 명시

import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
  Box,
  Grid,
  TextField,
  Paper,
  Button,
  IconButton,
  Stack,
  Typography,
  Divider,
  CircularProgress,
} from '@mui/material'
// MUI 아이콘들
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import LinkIcon from '@mui/icons-material/Link'
import LooksOneIcon from '@mui/icons-material/LooksOne'
import LooksTwoIcon from '@mui/icons-material/LooksTwo'
import CodeIcon from '@mui/icons-material/Code' // 코드블록용 아이콘 예시
import CampaignIcon from '@mui/icons-material/Campaign' // Callout용 아이콘 예시 (네 프로젝트에 맞게)

// next-mdx-remote에서 클라이언트용 MDXRemote와 타입을 가져옴
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'

// 🚨 중요: useMDXComponents 훅의 실제 경로로 수정해야 합니다!
// 예시: import { useMDXComponents } from '@/lib/mdx/useMDXComponents';
// 또는 네가 app/blog/page.tsx 에서 사용한 경로를 기준으로 상대 경로 설정
// ex: import { useMDXComponents } from '../../lib/mdx/useMDXComponents'; // 경로에 따라 다름
import { useMDXComponents } from '../../../mdx-component' // 네가 제공한 경로를 바탕으로 한 예시. 실제 위치에 맞게 수정!

const MarkdownEditor: React.FC = () => {
  const [markdownInput, setMarkdownInput] = useState<string>('')
  const [serializedMdx, setSerializedMdx] =
    useState<MDXRemoteSerializeResult | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // 네 커스텀 MDX 컴포넌트들을 가져옴
  const mdxComponents = useMDXComponents({})

  // MDX 파싱 및 렌더링을 위한 API 호출 함수
  const fetchAndSetMdx = useCallback(async (mdText: string) => {
    if (!mdText.trim()) {
      setSerializedMdx(null)
      setError(null)
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/mdx-preview', {
        // 1번에서 만든 API 라우트
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: mdText }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('미리보기 API 오류 응답:', errorData)
        throw new Error(
          errorData.error ||
            `미리보기를 가져오지 못했습니다 (상태: ${response.status})`,
        )
      }

      const { mdxSource } = await response.json()
      setSerializedMdx(mdxSource as MDXRemoteSerializeResult)
    } catch (e: any) {
      console.error('MDX 미리보기 처리 중 예외:', e)
      setError(e.message || '미리보기를 렌더링하는 데 실패했습니다.')
      setSerializedMdx(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // 입력 값 변경 시 디바운싱으로 API 호출
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchAndSetMdx(markdownInput)
    }, 500) // 500ms 디바운스
    return () => clearTimeout(handler)
  }, [markdownInput, fetchAndSetMdx])

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownInput(event.target.value)
  }

  // 툴바 버튼 클릭 시 마크다운 구문 삽입 (커서 위치 고려)
  const insertMarkdownSyntax = (
    type: 'bold' | 'italic' | 'h1' | 'link' | 'quote' | 'codeblock' | 'callout',
  ) => {
    if (!textareaRef.current) return

    const textarea = textareaRef.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = markdownInput.substring(start, end)
    let prefix = '',
      suffix = '',
      placeholder = ''
    let textToInsert = ''

    switch (type) {
      case 'bold':
        prefix = '**'
        suffix = '**'
        placeholder = '굵은 텍스트'
        break
      case 'italic':
        prefix = '*'
        suffix = '*'
        placeholder = '기울인 텍스트'
        break
      case 'h1':
        prefix = '\n# '
        suffix = '\n'
        placeholder = '제목 1'
        break
      case 'link':
        prefix = '['
        suffix = `](${prompt('링크 URL을 입력하세요:', 'https://') || ''})`
        placeholder = '링크 텍스트'
        break
      case 'quote':
        prefix = '\n> '
        suffix = '\n'
        placeholder = '인용문'
        break
      case 'codeblock':
        prefix = '\n```javascript\n'
        suffix = '\n```\n'
        placeholder = 'console.log("Hello");'
        break // 언어는 javascript 예시
      case 'callout':
        prefix = '\n<Callout type="info">\n  '
        suffix = '\n</Callout>\n'
        placeholder = '콜아웃 내용'
        break
      // TODO: 다른 타입들 추가 (h2, h3, 리스트 등)
    }

    if (selectedText) {
      textToInsert = `${prefix}${selectedText}${suffix}`
    } else {
      textToInsert = `${prefix}${placeholder}${suffix}`
    }

    const newText =
      markdownInput.substring(0, start) +
      textToInsert +
      markdownInput.substring(end)
    setMarkdownInput(newText)

    // 입력 후 커서 위치 조정 (선택적 개선 사항)
    textarea.focus()
    // 정확한 커서 위치 계산은 textToInsert의 실제 길이에 따라 달라짐
    // setTimeout(() => textarea.setSelectionRange(start + prefix.length, start + prefix.length + (selectedText ? selectedText.length : placeholder.length)), 0);
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
      {' '}
      {/* 헤더 높이(64px) 제외 예시 */}
      {/* 툴바 */}
      <Paper elevation={1} sx={{ p: 1, mb: 1, flexShrink: 0 }}>
        <Stack
          direction="row"
          spacing={{ xs: 0.2, sm: 0.5 }}
          alignItems="center"
          flexWrap="wrap"
        >
          <IconButton
            size="small"
            onClick={() => insertMarkdownSyntax('bold')}
            title="굵게"
          >
            <FormatBoldIcon />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => insertMarkdownSyntax('italic')}
            title="기울임꼴"
          >
            <FormatItalicIcon />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ mx: { xs: 0.2, sm: 0.5 } }}
          />
          <IconButton
            size="small"
            onClick={() => insertMarkdownSyntax('h1')}
            title="제목1"
          >
            <LooksOneIcon />
          </IconButton>
          {/* <IconButton size="small" onClick={() => insertMarkdownSyntax('h2')} title="제목2"><LooksTwoIcon /></IconButton> */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ mx: { xs: 0.2, sm: 0.5 } }}
          />
          <IconButton
            size="small"
            onClick={() => insertMarkdownSyntax('link')}
            title="링크"
          >
            <LinkIcon />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => insertMarkdownSyntax('quote')}
            title="인용"
          >
            <FormatQuoteIcon />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => insertMarkdownSyntax('codeblock')}
            title="코드블록"
          >
            <CodeIcon />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ mx: { xs: 0.2, sm: 0.5 } }}
          />
          <Button
            size="small"
            startIcon={<CampaignIcon />}
            onClick={() => insertMarkdownSyntax('callout')} // 'callout'은 네 커스텀 컴포넌트에 맞게
            sx={{
              textTransform: 'none',
              fontSize: '0.8rem',
              p: { xs: '2px 4px', sm: '4px 8px' },
            }}
          >
            Callout
          </Button>
        </Stack>
      </Paper>
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
          <TextField
            inputRef={textareaRef}
            id="markdown-textarea"
            multiline
            fullWidth
            variant="outlined"
            value={markdownInput}
            onChange={handleInputChange}
            placeholder="여기에 마크다운을 입력하세요..."
            sx={{
              flexGrow: 1,
              '& .MuiInputBase-root': {
                height: '100%',
                alignItems: 'flex-start',
                p: '12px',
              }, // 패딩 조정
              '& .MuiInputBase-input': {
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                height: '100% !important',
                overflowY: 'auto',
                lineHeight: 1.5,
              },
            }}
          />
        </Grid>

        {/* 오른쪽: 미리보기 영역 */}
        <Grid
          size={6}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Paper
            elevation={1}
            sx={{
              p: 2,
              flexGrow: 1,
              overflowY: 'auto',
              position: 'relative',
              fontSize: '0.9rem',
            }}
          >
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              sx={{ fontSize: '0.7rem' }}
            >
              미리보기
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {isLoading && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'calc(100% - 40px)' /* 헤더/디바이더 높이 제외 */,
                }}
              >
                <CircularProgress size={30} />
              </Box>
            )}
            {error && (
              <Typography
                color="error"
                sx={{ whiteSpace: 'pre-wrap', fontSize: '0.8rem' }}
              >{`오류: ${error}`}</Typography>
            )}
            {!isLoading && !error && serializedMdx && (
              <Box className="mdx-preview-content">
                {' '}
                {/* 스타일링을 위한 클래스 네임 */}
                <MDXRemote {...serializedMdx} components={mdxComponents} />
              </Box>
            )}
            {/* 초기 상태 또는 입력 없을 때 메시지 */}
            {!isLoading &&
              !error &&
              !serializedMdx &&
              !markdownInput.trim() && (
                <Typography color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                  마크다운을 입력하면 여기에 미리보기가 표시됩니다.
                </Typography>
              )}
            {!isLoading &&
              !error &&
              !serializedMdx &&
              markdownInput.trim() && ( // 입력은 있지만 아직 결과가 없거나 로드 실패한 경우
                <Typography color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                  미리보기를 로드 중이거나, 입력 내용에 오류가 있을 수 있습니다.
                </Typography>
              )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MarkdownEditor
