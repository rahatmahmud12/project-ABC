import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
const port = 3000;

const a = 10;
//parser

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
console.log(process.cwd());
export default app;
