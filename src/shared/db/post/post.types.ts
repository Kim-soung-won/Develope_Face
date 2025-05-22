import { z } from "zod";
import { CreatePostEntitySchema, PostEntitySchema } from "./post.contracts";

export type PostEntity = z.infer<typeof PostEntitySchema>;
export type CreatePostEntity = z.infer<typeof CreatePostEntitySchema>;