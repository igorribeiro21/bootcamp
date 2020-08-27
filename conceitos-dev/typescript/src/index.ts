import express from 'express';
import { helloWorld } from './route';

const app = express();

app.get("/", helloWorld);

app.listen(3333, () => {
    console.log("Api rodando...")
});