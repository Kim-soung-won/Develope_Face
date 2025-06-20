'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Skeleton, SvgIconProps } from '@mui/material'

interface DynamicMuiIconProps extends SvgIconProps {
  iconName: string
}

const DynamicMuiIcon = ({ iconName, ...props }: DynamicMuiIconProps) => {
  // 아이콘 이름에 해당하는 컴포넌트를 동적으로 import 합니다.
  const IconComponent = dynamic(
    () => import('@mui/icons-material').then((mod) => (mod as any)[iconName]),
    {
      // 로딩 중에는 스켈레톤 UI를 보여줍니다.
      loading: () => <Skeleton variant="rectangular" width={40} height={40} />,
      // 서버사이드에서는 렌더링하지 않습니다.
      ssr: false,
    },
  )

  return (
    <Suspense
      fallback={<Skeleton variant="rectangular" width={40} height={40} />}
    >
      <IconComponent {...props} />
    </Suspense>
  )
}

export default DynamicMuiIcon
