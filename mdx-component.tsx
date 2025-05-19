import type { MDXComponents } from 'mdx/types'
import {
  Typography,
  Link as MuiLink,
  List,
  ListItem,
  Divider,
  Box,
} from '@mui/material'
import { Callout, Code, H1, H2, H3, Pre } from '@/shared/libs/mdx'

/**
 * MDX에서 사용될 MUI 기반 컴포넌트 정의
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,

    p: ({ children }) => (
      <Typography variant="body1" paragraph>
        {children}
      </Typography>
    ),

    a: ({ href, children }) => (
      <MuiLink href={href} underline="hover" color="primary">
        {children}
      </MuiLink>
    ),

    ul: ({ children }) => (
      <List sx={{ listStyleType: 'disc', pl: 3 }}>{children}</List>
    ),
    ol: ({ children }) => (
      <List sx={{ listStyleType: 'decimal', pl: 3 }}>{children}</List>
    ),
    li: ({ children }) => (
      <ListItem sx={{ display: 'list-item', py: 0.5 }}>{children}</ListItem>
    ),

    code: Code,
    pre: Pre,

    blockquote: ({ children }) => (
      <Box
        component="blockquote"
        sx={{
          borderLeft: '4px solid',
          borderColor: 'grey.400',
          pl: 2,
          my: 2,
          fontStyle: 'italic',
          color: 'text.secondary',
        }}
      >
        {children}
      </Box>
    ),

    hr: () => <Divider sx={{ my: 4 }} />,

    Callout,

    // 병합된 사용자 정의 컴포넌트 유지
    ...components,
  }
}
