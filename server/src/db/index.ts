import { Sequelize } from 'sequelize';

export let conexaoBD = {
    hasConnection,
}


export let db = new Sequelize(
    'desafiochefaorm',
    'root',
    'mysql',
    {dialect: 'mysql',host: 'localhost', port: 3306}
)

async function hasConnection(){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado");
    } 
    catch (error) {
        console.error("Erro ao tentar conexão com o banco de dados");
    }
}

