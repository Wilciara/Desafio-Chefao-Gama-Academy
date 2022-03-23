import { Sequelize} from 'sequelize';

export const db = new Sequelize(
    'desafiochefao',
    'root',
    'tiririca10',
    {dialect: 'mysql',host: 'localhost', port: 3306}
)
