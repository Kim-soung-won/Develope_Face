import prisma from "../prisma"
import { CreatePostEntity, PostEntity } from "./post.types";


export class PostQuery {

  static getAll = async (): Promise<PostEntity[]> => {
    const posts = await prisma.post.findMany();
    return posts;
  }

  static save = async (post: CreatePostEntity) => {
    return await prisma.post.create({
      data: {
        title: post.title,
        markdown_content: post.markdown_content,
        created_at: new Date(),
      },
    });
  }
}
