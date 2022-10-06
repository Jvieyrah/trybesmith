import express from 'express';

// Create a new express application instance

const app = express();

app.use(express.json());

export default app;
