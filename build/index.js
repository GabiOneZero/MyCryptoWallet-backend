"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routers/user.routes"));
const currency_routes_1 = __importDefault(require("./routers/currency.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const cors = require('cors');
const whitleList = ['http://localhost:4200'];
app.use(express_1.default.json());
app.use(cors({ origin: whitleList }));
app.get('/ping', (_req, res) => {
    res.send('Pong!');
});
app.listen(PORT, () => {
    console.log(`⚡️ [SERVER]: Server is running at http://localhost:${PORT} ⚡️`);
});
app.use('/api/user', user_routes_1.default);
app.use('/api/currency', currency_routes_1.default);
