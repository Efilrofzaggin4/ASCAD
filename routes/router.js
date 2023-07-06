import express from "express";


const router = express.Router();

///////////////////appel des routers///////////////////////
///ROUTERS COTE ADMIN
import Admin from "../controllers/admin.js";

import {AjoutDePrestationForm, AjoutDePrestationSubmit} from "../controllers/ajout_de_prestation.js";







//////////////////liste des routes/////////////////

//ACCUEIL ADMIN

router.get('/admin', Admin);

//AJOUT DE PRESTATION

router.get('/admin/ajout_de_prestation', AjoutDePrestationForm);
router.post('/admin/ajout_de_prestation', AjoutDePrestationSubmit);




export default router;