import { db } from '../db/index';
import { DataTypes } from 'sequelize';
import { Candidato } from './Candidato';
import { Valor } from './Valor';

export const ValorCandidato = db.define('valores_candidatos', {
    id_candidato: {
        type: DataTypes.INTEGER,
        references: {
            model: Candidato,
            key: "id_candidato"
        }
    },
    id_valor: {
        type: DataTypes.INTEGER,
        references: {
            model: Valor,
            key: "id_valor"
        }
    }
});
