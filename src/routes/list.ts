import express, { Request, Response } from "express";
import dbPool from "../db/db-pool";

export const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Express + TdddddS Server");
});

router.post("/item", (req: Request, res: Response) => {
  const item = req.body;
  try {
    dbPool.query("INSERT INTO list_items (name, category, quantity) VALUES ($1,$2,$3)", [
      item.name,
      item.category,
      item.quantity
    ]);
    res.status(200).json(`Item nmed: ${item.name} successfully added to the table.`);
  } catch (error) {
    if (item) {
      res.status(403).json(error);
    } else {
      res.status(422).json(error);
    }
  }
});

router.get("/items", async (req: Request, res: Response) => {
  // call for this endpoint will be (get) .../list/items
  try {
    const result = await dbPool.query("SELECT * FROM list_items");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

// app.post("/item", (req: Request, res: Response) => {
//   const body: NameAddRequestBody = req.body;
//   const name: string = `${body.name}, `;
//   fs.writeFile("static/names.txt", name, { flag: "a+" }, (err) => {
//     if (err) {
//       console.log(err);
//       res.status(503).send(err);
//     } else {
//       res.status(200).send("Successfully added a name record");
//     }
//   });
// });
