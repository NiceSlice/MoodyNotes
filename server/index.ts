import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('GET request to the homepage');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} 🚀`);
})
