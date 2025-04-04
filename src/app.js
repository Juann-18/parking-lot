import express from 'express';
import morgan from 'morgan';
import authRaut from './routes/auth.routes.js'
import cors from 'cors'


const app = express();

app.use(cors({
    origin:  'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use(express.json())

app.use('/api',authRaut);

export default app;
