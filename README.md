# my-api-example

## Project Setup

```
mkdir express-ts-api
cd express-ts-api
npm init -y
```

install necessary dependencies

```
npm install express
npm install -D typescript @types/express @types/node ts-node nodemon
```

Create a tsconfig.json file

```
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Add scripts to package.json for building and running:

```// package.json (add these scripts)
"scripts": {
  "build": "tsc",
  "start": "node dist/app.js",
  "dev": "nodemon --exec ts-node src/app.ts"
}
```

## 2. Create the Express Application:

Create a src directory and an app.ts file inside it:

```
// src/app.ts
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a simple GET route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!');
});

// Define a POST route with a typed request body
interface User {
  id: number;
  name: string;
}

app.post('/users', (req: Request<{}, {}, User>, res: Response) => {
  const newUser: User = req.body;
  console.log('Received new user:', newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

## 3. Run the API:

```
npm run dev
```

To build and run the compiled Javascript

```
npm run build
npm start
```
