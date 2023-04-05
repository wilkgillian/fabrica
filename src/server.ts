import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { router } from './routes';
import { createConection } from './db/connection';

createConection(process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(
  cors({
    methods: 'GET, PUT, POST, DELETE, PATCH',
    origin: '*'
  })
);

app.use(router);

app.listen(3333, () => console.log('Server is running'));
