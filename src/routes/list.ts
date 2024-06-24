import express, { Request, Response } from "express";
import dbPool from "../db/db-pool";

export const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Express + TdddddS Server");
});

router.post("/item", async (req: Request, res: Response) => {
  const item = req.body;
  try {
    const { rows } = await dbPool.query(
      "INSERT INTO list_items (name, category, quantity) VALUES ($1,$2,$3) RETURNING *",
      [item.name, item.category, item.quantity]
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    if (item) {
      res.status(403).send("There is something wrong with the item!").json(error);
    } else {
      res.status(422).send("The item was not there...").json(error);
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

router.delete("/item/:item_id", (req: Request, res: Response) => {
  const item_id = req.params.item_id;
  console.log(item_id);
  try {
    dbPool.query("DELETE FROM list_items WHERE item_id =$1", [item_id]);
    res.status(200).json("Item successfully deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});
