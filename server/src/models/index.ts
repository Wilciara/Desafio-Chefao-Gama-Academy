import { Beneficio } from "./Beneficio";
import { Candidato } from "./Candidato";
import { Candidatura } from "./Candidatura";
import { Certificado } from "./Certificado";
import { Depoimento } from "./Depoimento";
import { Empresa } from "./Empresa";
import { Experiencia } from "./Experiencia";
import { Formacao } from "./Formacao";
import { Vaga } from "./Vaga";
import { Valor } from "./Valor";
import { ValorCandidato } from "./ValorCandidato";

// Certificado-Candidato
Certificado.belongsTo(Candidato, {
    foreignKey: "id_candidato",
})
Candidato.hasMany(Certificado, {
    foreignKey: "id_candidato"
})

// Formacao-Candidato
Formacao.belongsTo(Candidato, {
    foreignKey: "id_candidato",
})
Candidato.hasMany(Formacao, {
    foreignKey: "id_candidato"
})

// Experiencia-Candidato
Experiencia.belongsTo(Candidato, {
    foreignKey: "id_candidato",
})
Candidato.hasMany(Experiencia, {
    foreignKey: "id_candidato"
})

// Depoimento-Empresa
Depoimento.belongsTo(Empresa, {
    foreignKey: "id_empresa",
})
Empresa.hasMany(Depoimento, {
    foreignKey: "id_empresa"
})

// Vaga-Empresa
Vaga.belongsTo(Empresa, {
    foreignKey: "id_empresa",
})
Empresa.hasMany(Vaga, {
    foreignKey: "id_empresa"
})

// Beneficio-Vaga
Beneficio.belongsTo(Vaga, {
    foreignKey: "id_vaga",
})
Vaga.hasMany(Beneficio, {
    foreignKey: "id_vaga"
})

// Candidatura-Candidato
Candidatura.belongsTo(Candidato, {
    foreignKey: "id_candidato"
})
Candidato.hasMany(Candidatura, {
    foreignKey: "id_candidato"
})

// Candidatura-Vaga
Candidatura.belongsTo(Vaga, {
    foreignKey: "id_vaga"
})
Vaga.hasMany(Candidatura, {
    foreignKey: "id_vaga"
})

//
Valor.belongsToMany(Candidato, {
    foreignKey: "id_candidato",
    through: ValorCandidato
})

Candidato.belongsToMany(Valor, {
    foreignKey: "id_valor",
    through: ValorCandidato
})

export { Beneficio, Candidato, Candidatura, Certificado, Depoimento, Empresa, Experiencia, Formacao, Vaga }