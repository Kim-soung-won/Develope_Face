import {
  SandpackCodeEditor,
  SandpackFiles,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react'
import { useEffect } from 'react'

export const SandpackEditor = ({
  onCodeChange,
}: {
  onCodeChange: (files: SandpackFiles) => void
}) => {
  // 3. useSandpack 훅을 사용해 Sandpack의 내부 상태와 컨트롤러에 접근
  const { sandpack } = useSandpack()
  const { files } = sandpack

  // 4. Sandpack 내부 파일(files)이 변경될 때마다 부모에게 알림
  useEffect(() => {
    onCodeChange(files)
  }, [files, onCodeChange])

  return (
    <SandpackLayout>
      <SandpackCodeEditor style={{ minHeight: '400px' }} />
      <SandpackPreview style={{ minHeight: '400px' }} />
    </SandpackLayout>
  )
}
