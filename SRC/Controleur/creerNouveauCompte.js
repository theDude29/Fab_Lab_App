import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function creerNouveauCompte(pseudo, mdp, email) {
    var requete = "INSERT INTO App_compte_utilisateur(pseudo, mdp, email) VALUES('" + pseudo + "','" + mdp + "','" + email + "')"
    requeteSQL(requete)
}

export function pseudoPris(pseudo, callback) {

        var result = requeteSQL("SELECT pseudo from App_compte_utilisateur")
        .then(listPseudos => {
            var pseudoPris = false

            for(var pseudoItem of listPseudos) {
                if(pseudoItem.pseudo == pseudo) {
                    pseudoPris = true
                }
            }

            callback(pseudoPris)
        })
}
