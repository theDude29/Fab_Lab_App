import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function creerNouveauCompte(pseudo, mdp, email) {
    var requete = "INSERT INTO App_compte_utilisateur(pseudo, mdp, email) VALUES('" + pseudo + "','" + mdp + "','" + email + "')"
    requeteSQL(requete)
}

export function pseudoLibre(pseudo, callback) {

        var result = requeteSQL("SELECT pseudo from App_compte_utilisateur")
        .then(listPseudos => {
            var pseudoLibre = true

            if(pseudo != "") {
                for(var pseudoItem of listPseudos) {
                    if(pseudoItem.pseudo == pseudo) {
                        pseudoLibre = false
                    }
                }
            }
            else {
                pseudoLibre = false
            }

            callback(pseudoLibre)
        })
}

export function emailValide(email, callback) {
    var emailValide = false

    if(email != "") {
        if(email.match(/^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/)) {
            emailValide = true
        }
        else {
            emailValide = false
        }
    }
    else {
        emailValide = true
    }

    callback(emailValide)
}
