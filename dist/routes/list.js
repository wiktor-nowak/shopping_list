"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const db_pool_1 = __importDefault(require("../db/db-pool"));
exports.router = express_1.default.Router();
exports.router.get("/", (req, res) => {
    res.send("Express + TdddddS Server");
});
exports.router.post("/item", (req, res) => {
    const item = req.body;
    try {
        db_pool_1.default.query("INSERT INTO list_items (name, category, quantity) VALUES ($1,$2,$3)", [
            item.name,
            item.category,
            item.quantity
        ]);
        res.status(200).json(`Item nmed: ${item.name} successfully added to the table.`);
    }
    catch (error) {
        if (item) {
            res.status(403).json(error);
        }
        else {
            res.status(422).json(error);
        }
    }
});
exports.router.get("/items", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // call for this endpoint will be (get) .../list/items
    try {
        const result = yield db_pool_1.default.query("SELECT * FROM list_items");
        res.status(200).json(result.rows);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
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
