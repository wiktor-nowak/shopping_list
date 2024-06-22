"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const list_1 = require("./routes/list");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const port = process.env.PORT || 5052;
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
};
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use("/list", list_1.router);
exports.app.listen(port, () => {
    console.log(`[server]: server running on port ${port}`);
});
