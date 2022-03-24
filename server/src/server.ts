import express, { json } from 'express'
import { db } from './db/index';
import { conexaoBD } from './db/index';
import { routes } from './routes/routes';
 
const app = express();

app.use(json())
app.use(routes)

conexaoBD.hasConnection();

app.listen(3000, async () => {
    await db.sync();
    
    console.log("App rodando porta 3000!")
})