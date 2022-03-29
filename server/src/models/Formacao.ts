import { db } from '../db/index';
import { DataTypes } from 'sequelize';

export const Formacao = db.define('formacoes', {
    id_formacao: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    formacao: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    grau: {
        type: DataTypes.STRING
    },
    curso: {
        type: DataTypes.STRING
    },
    instituicao: {
        type: DataTypes.STRING
    },
    data_inicio: {
        type: DataTypes.DATE
    },
    data_fim: {
        type: DataTypes.DATE
    }
});