import prisma from "../prisma"


export class PostQuery {

  static getAll = async () => {
    const posts = await prisma.post.findMany();
    return posts;
  }
}
