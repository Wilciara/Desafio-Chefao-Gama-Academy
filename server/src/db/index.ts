import { Sequelize } from 'sequelize';


export const db = new Sequelize(
    'heroku_fc38a5a1db15f71',
    'b1f0141177d914',
    'e105dd91',
    {dialect: 'mysql',host: 'us-cdbr-east-05.cleardb.net', port: 3306}
)


export const conexaoBD = {
    hasConnection,
}

async function hasConnection(){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado");
    } 
    catch (error) {
        console.error("Erro ao tentar conexão com o banco de dados");
    }
}

