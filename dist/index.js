"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Express + TdddddS Server");
});
app.get("/users", (req, res) => {
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
