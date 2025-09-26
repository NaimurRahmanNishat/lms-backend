"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const db_1 = __importDefault(require("./utils/db"));
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary_cloud_name,
    api_key: config_1.default.cloudinary_api_key,
    api_secret: config_1.default.cloudinary_api_secret,
});
app_1.default.listen(config_1.default.port, () => {
    console.log(`Server is running on port: http://localhost:${config_1.default.port}`);
    (0, db_1.default)();
});
//# sourceMappingURL=server.js.map