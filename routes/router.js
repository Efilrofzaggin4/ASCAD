import express from "express";


const router = express.Router();

///////////////////appel des routers///////////////////////
///ROUTERS COTE ADMIN
import Admin from "../controllers/admin.js";








//liste des routes

//ACCUEIL ADMIN

router.get('/admin', Admin);





export default router;