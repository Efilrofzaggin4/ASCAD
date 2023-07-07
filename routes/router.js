import express from "express";


const router = express.Router();

///////////////////appel des routers///////////////////////
///ROUTERS COTE ADMIN
import Admin from "../controllers/admin.js";

import {AjoutDePrestationForm, AjoutDePrestationSubmit} from "../controllers/ajout_de_prestation.js";
import {Prestations, SuppPrestation, EditPrestation, EditPrestationSubmit} from "../controllers/prestation_admin.js"





 
//////////////////liste des routes/////////////////

//ACCUEIL ADMIN

router.get('/admin', Admin);

//GESTION DE PRESTATION

router.get('/admin/prestation_admin/ajout_de_prestation', AjoutDePrestationForm);
router.post('/admin/prestation_admin/ajout_de_prestation', AjoutDePrestationSubmit);
router.get('/admin/prestation_admin', Prestations);
router.delete('/admin/prestation_admin/:id', SuppPrestation)
router.get('/admin/prestation_admin/editer_prestation/:id', EditPrestation)
router.post('/admin/prestation_admin/editer_prestation/:id' ,EditPrestationSubmit)

export default router;