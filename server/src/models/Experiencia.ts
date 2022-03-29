import { db } from '../db/index';
import { DataTypes } from 'sequelize';

export const Experiencia = db.define('experiencias', {
    id_empresa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    empresa: {
        type: DataTypes.STRING
    },
    cargo: {
        type: DataTypes.STRING
    },
    data_inicio: {
        type: DataTypes.DATE
    },
    data_fim: {
        type: DataTypes.DATE
    },
    descricao: {
        type: DataTypes.TEXT
    }
});