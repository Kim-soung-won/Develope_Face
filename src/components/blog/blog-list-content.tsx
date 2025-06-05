'use client'

import { GetPostPaginatedsResponseBody } from '@/app/api/posts'
import { getPosts } from '@/shared/api/post'
import { formatDateTime } from '@/shared/utils'
import {
  alpha,
  Box,
  CircularProgress,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

export function BlogListContent() {
  const [postsData, setPostsData] =
    useState<GetPostPaginatedsResponseBody | null>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true) // 로딩 상태 추가
  const theme = useTheme()

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true) // 데이터 요청 시작 시 로딩 상태 true
      try {
        const data = await getPosts({
          pageNo: 1, // API 스키마에 따라 0 또는 1로 시작 (Zod default가 1이었으므로 1로 가정)
          size: 20,
          orderBy: 'created_at', // 이 필드가 PostApiEntitySchema에 존재하고 정렬 가능해야 함
          order: 'desc',
        })
        setPostsData(data)
        setFetchError(null) // 성공 시 에러 상태 초기화
      } catch (error: any) {
        setFetchError(
          error instanceof Error
            ? error.message
            : '알 수 없는 에러가 발생하여 게시글을 불러올 수 없습니다.',
        )
        console.error('BlogContent에서 게시글 로딩 에러:', error)
      } finally {
        setIsLoading(false) // 데이터 요청 완료 시 로딩 상태 false
      }
    }

    loadPosts()
  }, []) // 컴포넌트 마운트 시 1회 실행

  // 로딩 상태 UI (Suspense fallback과 유사하지만, 클라이언트 컴포넌트 내부에서 상태에 따라 직접 제어)
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '40vh',
        }}
      >
        <CircularProgress size={50} />
        <Typography variant="h6" sx={{ ml: 2 }}>
          게시글을 불러오고 있습니다...
        </Typography>
      </Box>
    )
  }

  // 에러 상태 UI
  if (fetchError) {
    return (
      <Box
        sx={{
          p: 2,
          backgroundColor: 'error.lighter',
          border: `1px solid ${theme.palette.error.main}`,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" color="error.dark" gutterBottom>
          앗! 문제가 생겼어요 😢
        </Typography>
        <Typography color="error.main">에러: {fetchError}</Typography>
      </Box>
    )
  }

  // 데이터가 없거나 list가 비어있는 경우
  if (!postsData || !postsData.list || postsData.list.length === 0) {
    return (
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ textAlign: 'center', py: 4 }}
      >
        아직 게시된 글이 없네요. 첫 글을 작성해보세요! ✨
      </Typography>
    )
  }

  // Framer Motion Variants
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      // 각 아이템에 순차적인 딜레이를 주기 위한 커스텀 prop 'i'
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // 0.05초씩 딜레이
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.015,
      boxShadow: theme.shadows[4], // MUI 테마 그림자 사용
      // backgroundColor: alpha(theme.palette.primary.light, 0.1), // 호버 시 미세한 배경색 변경
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
    tap: {
      scale: 0.985,
      transition: { duration: 0.1, ease: 'easeOut' },
    },
  }

  return (
    <List
      disablePadding
      component={motion.ul}
      initial="hidden"
      animate="visible"
    >
      {' '}
      {/* motion.ul로 변경 */}
      {postsData.list.map(
        (
          post,
          index, // post 타입은 PostApiEntitySchema를 따름
        ) => (
          // PostApiEntitySchema에 postId, title, created_at 필드가 있다고 가정
          <Fragment key={post.postId}>
            <motion.div // 각 리스트 아이템을 motion.div로 감싸서 개별 애니메이션 적용
              custom={index} // custom prop으로 index 전달
              variants={listItemVariants}
              // initial="hidden" // 부모 motion.ul에서 initial, animate를 한번에 제어 가능
              // animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <ListItem
                component={Link}
                href={`/blog/${post.postId}`}
                sx={{
                  display: 'block', // Link가 전체 영역을 차지하도록
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: 0, // motion.div에서 패딩을 관리하거나, 내부 Box에서 패딩 적용
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.paper,
                    transition: 'background-color 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.action.hover, 0.04),
                      boxShadow: theme.shadows[2],
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                  >
                    {post.title}
                  </Typography>
                  {post.createdAt && ( // PostApiEntitySchema에 created_at이 있다고 가정
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {formatDateTime(post.createdAt)}
                    </Typography>
                  )}
                </Box>
              </ListItem>
            </motion.div>
            {index < postsData.list.length - 1 && (
              <Box sx={{ height: theme.spacing(2) }} />
            )}{' '}
            {/* 아이템 간 간격 */}
          </Fragment>
        ),
      )}
    </List>
  )
}
