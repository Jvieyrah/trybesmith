import express from 'express';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';
import loginRoute from './routes/loginRoute';
import orderRoute from './routes/orderRoute';
// Create a new express application instance

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/login', loginRoute);
app.use('/orders', orderRoute);

export default app;
