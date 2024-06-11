import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5052;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TdddddS Server");
});

app.get("/users", (req: Request, res: Response) => {
  res.send([
    {
      id: 1,
      name: "Egg",
      cat: "Groceries",
      quant: 5
    },
    {
      id: 2,
      name: "CocaCola can",
      cat: "Groceries",
      quant: 3
    },
    {
      id: 3,
      name: "Toothpaste",
      cat: "Cosmetics",
      quant: 1
    },
    {
      id: 4,
      name: "USB C cable",
      cat: "Electronics",
      quant: 1
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
