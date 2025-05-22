import { z } from "zod";

export const PostEntitySchema = z.object({
  post_id: z.bigint(),
  title: z.string(),
  markdown_content: z.string(),
  created_at: z.date(),
})

export const CreatePostEntitySchema = z.object({
  title: z.string(),
  markdown_content: z.string(),
})
