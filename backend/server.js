import express from 'express'
import cors from 'cors'
import myData from './api/someData.route.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/myData', myData);
app.use('*', (req, res) => res.status(400).json({ error: 'not found'}));

export default app;