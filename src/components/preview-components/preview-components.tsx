'use client'
import { Typography } from '@mui/material'
import { SandpackProvider, SandpackFiles } from '@codesandbox/sandpack-react'
import { useTheme } from '@mui/material'
import { useState, useCallback } from 'react'
import { SandpackEditor } from './sandpack/sandpack-editor'

// --- 초기 파일 내용은 이전과 동일 ---
const initialAppCode = `import './styles.css';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1 style={{ color: 'cornflowerblue' }}>안녕하세요!</h1>
      <button className="my-button" onClick={() => setCount(count + 1)}>
        버튼 ({count})
      </button>
    </div>
  );
}`

const initialStyleCode = `
.my-button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background: lightgray;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.my-button:hover {
  background: darkgray;
  color: white;
  transform: scale(1.05);
}`

export function ComponentPlayground() {
  const theme = useTheme()
  const [appCode, setAppCode] = useState(initialAppCode)
  const [styleCode, setStyleCode] = useState(initialStyleCode)

  const files = {
    '/App.tsx': appCode,
    '/styles.css': styleCode,
  }

  // 5. 자식 컴포넌트로부터 업데이트된 파일 정보를 받아 state를 갱신하는 함수
  const handleCodeChange = useCallback((allFiles: SandpackFiles) => {
    const newAppCode =
      typeof allFiles['/App.tsx'] === 'object'
        ? allFiles['/App.tsx']?.code
        : undefined
    const newStyleCode =
      typeof allFiles['/styles.css'] === 'object'
        ? allFiles['/styles.css']?.code
        : undefined

    if (typeof newAppCode === 'string' && newAppCode !== appCode) {
      setAppCode(newAppCode)
    }
    if (typeof newStyleCode === 'string' && newStyleCode !== styleCode) {
      setStyleCode(newStyleCode)
    }
  }, [])

  const handleSaveToDB = () => {
    console.log('DB에 저장될 App.tsx 코드:', appCode)
    console.log('DB에 저장될 styles.css 코드:', styleCode)
    alert('콘솔을 확인해보세요! DB에 코드가 저장되었습니다.')
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          컴포넌트 미리보기
        </Typography>
        <button
          onClick={handleSaveToDB}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          💾 DB에 저장
        </button>
      </div>

      <SandpackProvider
        template="react-ts"
        files={files}
        theme={theme.palette.mode === 'dark' ? 'dark' : 'light'}
      >
        {/* 6. 분리된 자식 컴포넌트를 렌더링하고, 콜백 함수를 전달 */}
        <SandpackEditor onCodeChange={handleCodeChange} />
      </SandpackProvider>
    </>
  )
}
