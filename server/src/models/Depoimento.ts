import { db } from '../db/index';
import { DataTypes } from 'sequelize';
import { Empresa } from './Empresa';

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
    },
    id_empresa: {
        type: DataTypes.INTEGER,
        references: {
            model: Empresa,
            key: "id_empresa"
        }
    }
});