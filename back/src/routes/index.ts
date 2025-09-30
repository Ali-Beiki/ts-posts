import { Router } from "express";
import PostRouter from "./posts/index.ts";

const mainRouter: Router = Router();

mainRouter.use("/post", PostRouter);

export default mainRouter;
