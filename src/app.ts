import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 3003;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with Typescript!');
});

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello test!');
});

interface IUser {
  id: number;
  name: string;
}

app.post('.users', (req: Request<{}, {}, IUser>, res: Response) => {
  const newUser: IUser = req.body;
  console.log('Received new user:', newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})