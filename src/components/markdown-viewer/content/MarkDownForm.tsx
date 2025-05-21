import { TextField } from '@mui/material'

interface MarkDownFormUIProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  text: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export const MarkDownFormUI = ({
  textareaRef,
  text,
  onChange,
}: MarkDownFormUIProps) => {
  return (
    <TextField
      inputRef={textareaRef}
      id="markdown-textarea"
      multiline
      fullWidth
      variant="outlined"
      value={text}
      onChange={onChange}
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
  )
}
