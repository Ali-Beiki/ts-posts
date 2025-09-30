import { Router, type Request, type Response } from "express";
import { getPosts,getPost, addPost,editPost,deletePost} from "../../controllers/posts/index.ts";

const postRouter: Router = Router();

postRouter.get("/", getPosts);
postRouter.get("/:id", getPost);
postRouter.post("/", addPost);
postRouter.put("/:id", editPost);
postRouter.delete("/:id", deletePost);

export default postRouter;
