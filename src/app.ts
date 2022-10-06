import express from 'express';
import productRoute from './routes/productRoute';

// Create a new express application instance

const app = express();

app.use(express.json());

app.use('/products', productRoute);

export default app;
