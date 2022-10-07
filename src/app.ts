import express from 'express';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';

// Create a new express application instance

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
