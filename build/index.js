"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routers/user.routes"));
const currency_routes_1 = __importDefault(require("./routers/currency.routes"));
const logs_utils_1 = __importDefault(require("./utils/logs.utils"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const cors = require('cors');
const whitleList = ['http://localhost:4200', 'http://localhost:5000'];
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors({ origin: whitleList }));
app.get('/ping', (_req, res) => {
    res.send('Pong!');
});
app.listen(PORT, () => {
    logs_utils_1.default.info(`⚡️ [SERVER]: Server is running at http://localhost:${PORT} ⚡️`);
});
app.use('/api/user', user_routes_1.default);
app.use('/api/currency', currency_routes_1.default);
