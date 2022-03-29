import { db } from '../db/index';
import { DataTypes } from 'sequelize';

export const Depoimento = db.define('depoimentos', {
    id_depoimento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    cargo: {
        type: DataTypes.STRING
    },
    link_video: {
        type: DataTypes.STRING
    }
});