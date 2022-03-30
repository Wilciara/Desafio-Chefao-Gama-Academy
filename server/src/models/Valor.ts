import { db } from '../db/index';
import { DataTypes } from 'sequelize';

export const Valor = db.define('valores', {
    id_valor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    }
});
