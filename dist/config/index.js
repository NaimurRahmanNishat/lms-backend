"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: Number(process.env.PORT) || 8000,
    nodeEnv: process.env.NODE_ENV || 'development',
    client_url: process.env.CLIENT_URL || "",
    database_url: process.env.MONGODB_URL || "",
    redis_url: process.env.REDIS_URL || "",
    smtp_host: process.env.SMTP_HOST || "",
    smtp_port: Number(process.env.SMTP_PORT) || 587,
    smtp_user: process.env.SMTP_USER || "",
    smtp_pass: process.env.SMTP_PASS || "",
    smtp_from: process.env.SMTP_FROM || "",
    jwt_access_secret: process.env.JWT_ACCESS_SECRET || "",
    access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN || "",
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || "",
    refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d",
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY || "",
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET || "",
};
exports.default = config;
//# sourceMappingURL=index.js.map