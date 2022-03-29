import { db } from '../db/index';
import { DataTypes } from 'sequelize';

export const Beneficio = db.define('beneficios', {
    id_beneficio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    valor: {
        type: DataTypes.FLOAT
    }
});