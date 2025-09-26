import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './config';
import globalErrorHandler from './middleware/globalError';

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [config.client_url],
    credentials: true
}));

// global error handler
app.use(globalErrorHandler);


// routes
import userRoutes from './routes/user.routes';


app.use("/api/v1/user", userRoutes);



app.get('/', (_req:Request, res:Response) => {
    res.send('LMS Backend Server is running...');
});

export default app;


// h8K3AAr7LS1PeWFU          naimurrahmun