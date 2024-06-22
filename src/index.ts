import express, { Express } from "express";
import dotenv from "dotenv";
import fs from "fs";
import cors from "cors";
import { router as listRouter } from "./routes/list";

dotenv.config();

export const app: Express = express();
const port = process.env.PORT || 5052;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/list", listRouter);

app.listen(port, () => {
  console.log(`[server]: server running on port ${port}`);
});
