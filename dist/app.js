"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3003;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello from Express with Typescript!');
});
app.get('/test', (req, res) => {
    res.send('Hello test!');
});
app.post('.users', (req, res) => {
    const newUser = req.body;
    console.log('Received new user:', newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
