import express, { Express, Request, Response } from "express";
import cors from "cors";
import { confirm_member, new_member } from "./controller/member";

const app: Express = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/new", new_member);
app.put("/confirm", confirm_member);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
