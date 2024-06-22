"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
index_1.default.get("/", (req, res) => {
    res.send("Express + TdddddS Server");
});
index_1.default.get("/items", (req, res) => {
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
index_1.default.post("/item", (req, res) => {
    const body = req.body;
    const name = `${body.name}, `;
    fs.writeFile("static/names.txt", name, { flag: "a+" }, (err) => {
        if (err) {
            console.log(err);
            res.status(503).send(err);
        }
        else {
            res.status(200).send("Successfully added a name record");
        }
    });
});
