"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5052;
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.get("/", (req, res) => {
    res.send("Express + TdddddS Server");
});
app.get("/users", (req, res) => {
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
app.post("/name", (req, res) => {
    const body = req.body;
    const name = `${body.name}, `;
    fs_1.default.writeFile("static/names.txt", name, { flag: "a+" }, (err) => {
        if (err) {
            console.log(err);
            res.status(503).send(err);
        }
        else {
            res.status(200).send("Successfully added a name record");
        }
    });
});
app.listen(port, () => {
    console.log(`[server]: server running on port ${port}`);
});
