import express, { json } from 'express'
import { db } from './db/index';
import { routes } from './routes/routes';
 
const app = express();

app.use(json())
app.use(routes)

app.listen(3000, async () => {
    await db.sync();
    console.log("App rodando porta 3000!")
})