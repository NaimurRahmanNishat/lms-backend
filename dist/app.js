"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const globalError_1 = __importDefault(require("./middleware/globalError"));
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: [config_1.default.client_url],
    credentials: true
}));
// global error handler
app.use(globalError_1.default);
// routes
const user_routes_1 = __importDefault(require("./routes/user.routes"));
app.use("/api/v1/user", user_routes_1.default);
app.get('/', (_req, res) => {
    res.send('LMS Backend Server is running...');
});
exports.default = app;
// h8K3AAr7LS1PeWFU          naimurrahmun
//# sourceMappingURL=app.js.map