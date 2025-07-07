import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { LearnerRoutes } from './app/modules/learner/learner.route';

const a = 10;
//parser

app.use(express.json());
app.use(cors());
app.use('/api/v1/learners', LearnerRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
console.log(process.cwd());
export default app;
