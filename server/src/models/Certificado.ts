import { db } from '../db/index';
import { DataTypes } from 'sequelize';
import { Candidato } from './Candidato';

export const Certificado = db.define('certificados', {
    id_certificado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    area_estudo: {
        type: DataTypes.STRING
    },
    instituicao: {
        type: DataTypes.STRING
    },
    modalidade: {
        type: DataTypes.STRING
    },
    data_inicio: {
        type: DataTypes.DATE
    },
    data_fim: {
        type: DataTypes.DATE
    },
    id_candidato: {
        type: DataTypes.INTEGER,
        references: {
            model: Candidato,
            key: "id_candidato"
        }
    }
});
