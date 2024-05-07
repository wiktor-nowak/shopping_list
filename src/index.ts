import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TdddddS Server");
});

app.get("/users", (req: Request, res: Response) => {
  res.send([
    {
      name: "John",
      comp: "Exp",
      tel: 23235235325
    },
    {
      name: "Rafael",
      comp: "NG",
      tel: 22341131367
    },
    {
      name: "Travis",
      comp: "NG-core",
      tel: 1194230434
    },
    {
      name: "Boy",
      comp: "GX",
      tel: 34090131203882
    }
  ]);
});

interface NameAddRequestBody {
  name: string;
}

app.post("/name", (req: Request, res: Response) => {
  const body: NameAddRequestBody = req.body;
  const name: string = `${body.name}, `;
  fs.writeFile("static/names.txt", name, { flag: "a+" }, (err) => {
    if (err) {
      console.log(err);
      res.status(503).send(err);
    } else {
      res.status(200).send("Successfully added a name record");
    }
  });
});

app.listen(port, () => {
  console.log(`[server]: server running on port ${port}`);
});
