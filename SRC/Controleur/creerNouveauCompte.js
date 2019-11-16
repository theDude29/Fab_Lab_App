import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function creerNouveauCompte(pseudo, mdp, email) {
    var requete = "INSERT INTO App_compte_utilisateur(pseudo, mdp, email) VALUES('" + pseudo + "','" + mdp + "','" + email + "')"
    requeteSQL(requete)
}

export function pseudoPris(pseudo) {
    var listPseudos = requeteSQL("SELECT pseudo from App_compte_utilisateur")

    console.log(listPseudos)

    var pseudoPris = false
    if(listPseudos.lenght() != 0) {
        for(var i = 0; i<listPseudos.lenght(); ++i) {
            if(listPseudos[i] == pseudo) {
                pseudoPris = true
            }
        }
    }

    return pseudoPris
}
