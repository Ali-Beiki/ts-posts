import { type Request, type Response } from "express";
import {
    getPostsService,
    getPostService,
    addPostService,
    editPostService,
    deletePostService,
} from "../../services/posts/index.ts";
import { type NewPost } from "../../db/schema/post.ts";

interface QueryParams {
    search?: string;
}

interface Params {
    id: string;
}

export const getPosts = async (
    req: Request<{}, {}, {}, QueryParams>,
    res: Response
): Promise<Response> => {
    try {
        const search: string | undefined = req.query.search;

        const posts = await getPostsService(search);
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(400).send(error);
    }
};

export const getPost = async (
    req: Request<Params>,
    res: Response
): Promise<Response> => {
    try {
        const { id }: Params = req.params;
        const post = await getPostService(id as string);

        if (!post) return res.status(404).json({ message: "Post Not Found !" });

        return res.status(200).json(post);
    } catch (error) {
        return res.status(400).send(error);
    }
};

export const addPost = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { title, content }: NewPost = req.body;
        const posts = await addPostService({ title, content });
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(400).send(error);
    }
};

export const editPost = async (
    req: Request<Params>,
    res: Response
): Promise<Response> => {
    try {
        const { id }: Params = req.params;
        const { title, content }: NewPost = req.body;

        const post = await editPostService(id, { title, content });

        if (!post) return res.status(404).json({ message: "Post Not Found !" });
        return res.status(200).json(post);
    } catch (error) {
        return res.status(400).send(error);
    }
};

export const deletePost = async (
    req: Request<Params>,
    res: Response
): Promise<Response> => {
    try {
        const { id }: { id: string } = req.params;
        const post = await deletePostService(id);

        if (!post) return res.status(404).json({ message: "Post Not Found !" });

        return res.status(200).json(post);
    } catch (error) {
        return res.status(400).send(error);
    }
};
