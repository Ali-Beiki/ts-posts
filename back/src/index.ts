import express, { type Express } from "express";
import cors from "cors";
import "dotenv/config";
import mainRouter from './routes/index.ts';

const app: Express = express();
const port: number = 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: false }));

app.use("/api",mainRouter)

app.listen(port, () => console.log(`Server in Run On Port ${port}`));
