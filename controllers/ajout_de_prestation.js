import pool from "../config/database.js";
import fs from "fs"

import { v4 as uuidv4 } from 'uuid';

export const AjoutDePrestationForm = (req, res) => {
    res.render('layout', {template :'ajout_de_prestation'});
};

export const AjoutDePrestationSubmit = (req, res) => {
    const { titre, description, prix_ht, prix_ttc, catégorie} = req.body;
    const id = uuidv4();
    
    console.log(id, titre, description, prix_ht, prix_ttc, catégorie)
    // Enregistrez les informations de la prestations dans la base de données
    const sql = 'INSERT INTO prestations (id, titre, description, prix_ht, prix_ttc, catégorie) VALUES (?, ?, ?, ?, ?, ?)';
    
    pool.query(sql, [id, titre, description, prix_ht, prix_ttc, catégorie], (error, result, fields) => {
        console.log(id, titre, description, prix_ht, prix_ttc, catégorie)
      if (error) {
        console.error(error);
        res.status(500).send("Erreur lors de l'ajout de l'ajout de la prestations");
        return;
      }
  
      // Redirigez l'utilisateur vers la page d'inex des prestations coté admin
      res.redirect('/admin');
    });
  };  