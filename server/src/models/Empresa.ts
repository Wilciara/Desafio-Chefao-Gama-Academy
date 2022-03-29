import { db } from '../db/index';
import { DataTypes } from 'sequelize';

export const Empresa = db.define('empresas', {
    id_empresa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    email_corp: {
        type: DataTypes.STRING
    },
    sobre: {
        type: DataTypes.STRING
    },
    imagem_perfil: {
        type: DataTypes.STRING
    },
    ano_fundacao: {
        type: DataTypes.INTEGER
    },
    setor: {
        type: DataTypes.STRING
    },
    subsetor: {
        type: DataTypes.STRING
    },
    num_funcionaries: {
        type: DataTypes.INTEGER
    },
    site: {
        type: DataTypes.STRING
    },
    linkedin: {
        type: DataTypes.STRING
    },
    instagram: {
        type: DataTypes.STRING
    },
    twitter: {
        type: DataTypes.STRING
    },
    tiktok: {
        type: DataTypes.STRING
    },
    sobre_cultura: {
        type: DataTypes.TEXT
    },
    sobre_diversidade: {
        type: DataTypes.TEXT
    },
    funcionaries_lgbtqia: {
        type: DataTypes.BOOLEAN
    },
    liderancas_lgbtqia: {
        type: DataTypes.BOOLEAN
    },
    politicas_lgbtqia: {
        type: DataTypes.TEXT
    }
});