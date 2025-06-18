/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }));
// app.use(cookieParser());
// application routes
// app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', test);

// app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

export default app;
