import express from "express";
import CandidatoController from "../controllers/CandidatoController";
import EmpresaController from "../controllers/EmpresaController";
import CertificadoController from "../controllers/CertificadoController";
import FormacaoController from "../controllers/FormacaoController";
import ExperienciaController from "../controllers/ExperienciaController";

export const routes = express.Router();


// Informações básicas
routes.post("/candidato", CandidatoController.create);

// // Sobre você
// routes.put("/candidato/sobre", CandidatoController.update);

// // Resumo das qualificações
// routes.post("/candidato/qualificacoes", CandidatoController.create);
// routes.put("/candidato/qualificacoes", CandidatoController.update);

// Formação acadêmica
routes.post("/candidato/formacao", FormacaoController.create);
// routes.put("/Formacao/formacao", FormacaoController.update);

// Cursos e certificados
routes.post("/candidato/certificados", CertificadoController.create);
// routes.put("/candidato/certificados", CertificadoController.update);

// Experiências profissionas
routes.post("/candidato/experiencias", ExperienciaController.create);
// routes.put("/candidato/experiencias", CandidatoController.update);

// // O que busca em uma empresa?
// routes.post("/candidato/experiencias", CandidatoController.create);
// routes.put("/candidato/experiencias", CandidatoController.update);



routes.post("/empresa", EmpresaController.create);


