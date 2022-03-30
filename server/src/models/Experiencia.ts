import { db } from '../db/index';
import { DataTypes } from 'sequelize';
import { Candidato } from './Candidato';

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
    },
    id_candidato: {
        type: DataTypes.INTEGER,
        references: {
            model: Candidato,
            key: "id_candidato"
        }
    }
});