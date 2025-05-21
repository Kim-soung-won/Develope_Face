import { Button, Divider, IconButton, Paper, Stack } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import LinkIcon from '@mui/icons-material/Link'
import LooksOneIcon from '@mui/icons-material/LooksOne'
import CodeIcon from '@mui/icons-material/Code' // 코드블록용 아이콘 예시
import CampaignIcon from '@mui/icons-material/Campaign'

type MarkdownInput =
  | 'bold'
  | 'italic'
  | 'h1'
  | 'link'
  | 'quote'
  | 'codeblock'
  | 'callout'

interface MarkdownSyntaxProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  markdownInput: string
  setMarkdownInput: React.Dispatch<React.SetStateAction<string>>
}

export const MarkdownSyntaxToolbar = ({
  textareaRef,
  markdownInput,
  setMarkdownInput,
}: MarkdownSyntaxProps) => {
  const insertMarkdownSyntax = (type: MarkdownInput) => {
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
  )
}
// 툴바 버튼 클릭 시 마크다운 구문 삽입 (커서 위치 고려)
