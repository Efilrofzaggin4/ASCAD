import pool from "../config/database.js";
import fs from "fs"
import { v4 as uuidv4 } from 'uuid';

export const Prestations = (req, res) => {
  let sql = 'SELECT * FROM prestations ORDER BY catégorie';

  pool.query(sql, function (error, prestations, fields) {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur de base de données');
    } else {
      res.render('layout', {template :  'prestation_admin',  prestations: prestations });
    }
  });
};

export const SuppPrestation = (req, res) => {
    
	//on récupère l'id de la prestations à supprimer
    let id = req.params.id;

	// requete de suppresion en BDD
	let sql = 'DELETE FROM prestations WHERE id = ?';

	pool.query(sql, [id], function (error, result, fields) {
	    if (error) {
	        console.log(error)
	        res.status(500).send({
	            error: 'Error when delete prestation'
	        });
	    } else {
	        res.status(204).send();
	    }
	});
}

export const EditPrestation = (req, res) => {
    
  let id = req.params.id;

  // on récupère déjà l'ancienne prestation
  let sql = 'SELECT * FROM prestations WHERE id = ?';

  pool.query(sql, [id], function (error, rows, fields) {
    const prestations = rows; // Assigner les résultats à la variable `prestations`
          // appel du template pour édition de la prestation
          res.render('layout',{template :'editer_prestation',  prestations: rows[0] });
   });
}

export const EditPrestationSubmit = (req, res) => {
    
	let id = req.params.id;
	
	const updatePrestation = {
		titre: req.body.titre,
		description: req.body.description,
    prix_ht: req.body.prix_ht,
    prix_ttc: req.body.prix_ttc,
    catégorie: req.body.catégorie
	}
	console.log(req.body)
	// requete de modification d'une prestation
	let sql = 'UPDATE prestations SET ? WHERE id = ?';

	pool.query(sql, [updatePrestation, id], function (error, result, fields) {
	    if (error) {
	        console.log(error)
	        res.status(500).send({
	            error: 'Error when update actualite'
	        });
	    } else {
	        res.redirect('/admin/prestation_admin')
	    }
	 });
}