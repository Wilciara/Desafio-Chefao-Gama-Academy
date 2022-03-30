import { db } from '../db/index';
import { DataTypes } from 'sequelize';
import { Candidato } from './Candidato';
import { Vaga } from './Vaga';


export const Candidatura = db.define('candidaturas', {
    id_candidatura: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING
    },
    id_candidato: {
        type: DataTypes.INTEGER,
        references: {
            model: Candidato,
            key: "id_candidato"
        }
    },
    id_vaga: {
        type: DataTypes.INTEGER,
        references: {
            model: Vaga,
            key: "id_vaga"
        }
    }
});
