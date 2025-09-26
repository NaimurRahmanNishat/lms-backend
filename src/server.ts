import app from "./app";
import config from "./config";
import dbConnect from "./utils/db";
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});

app.listen(config.port, () => {
    console.log(`Server is running on port: http://localhost:${config.port}`);
    dbConnect();
});