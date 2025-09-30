import { eq, like } from "drizzle-orm";
import { db } from "../../db/index.ts";
import { posts, type Post, type NewPost } from "../../db/schema/post.ts";
import { postValidatro } from "../../validator/posts/index.ts";

export const getPostsService = async (search: string | undefined): Promise<Post[]> => {
    const allPosts = await db
        .select()
        .from(posts)
        .where(search ? like(posts.title, `%${search}%`) : undefined);
    return allPosts;
};

export const getPostService = async (id: string): Promise<Post | undefined> => {
    const post = await db.query.posts.findFirst({
        where: eq(posts.id, id),
    });

    return post;
};

export const addPostService = async (
    body: NewPost
): Promise<Post | undefined> => {
    const post = postValidatro.upsert<NewPost>(body);
    const newPost = await db.insert(posts).values(post).returning();
    if (newPost) return newPost[0];
};

export const editPostService = async (
    id: string,
    body: NewPost
): Promise<Post | undefined> => {
    const post = postValidatro.upsert<NewPost>(body);
    const editPost = await db
        .update(posts)
        .set(post)
        .where(eq(posts.id, id))
        .returning();
    if (editPost) return editPost[0];
};

export const deletePostService = async (
    id: string
): Promise<string | undefined> => {
    const deletePost = await db
        .delete(posts)
        .where(eq(posts.id, id))
        .returning({ id: posts.id });
    if (deletePost) return deletePost[0]?.id;
};
