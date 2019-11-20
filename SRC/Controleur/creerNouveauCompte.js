import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'
import moment from 'moment'
sha1 = require('js-sha1');

export function creerNouveauCompte(pseudo, mdp, email) {
    var requete = "INSERT INTO App_compte_utilisateur(pseudo, mdp, email, date_inscription) VALUES('" + pseudo + "','" + sha1(mdp) + "','" + email + "','" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss')  + "')"
    requeteSQL(requete)
}

export function pseudoLibre(pseudo, callback) {

        var result = requeteSQL("SELECT pseudo from App_compte_utilisateur")
        .then(listPseudos => {
            var pseudoLibre = {
                etat: true,
                text: ""
            }

            if(pseudo != "") {
                for(var pseudoItem of listPseudos) {
                    if(pseudoItem.pseudo == pseudo) {
                        pseudoLibre.etat = false
                        pseudoLibre.text = "Ce pseudo est déja choisi.\n"
                    }
                }
            }
            else {
                pseudoLibre.etat = false
                pseudoLibre.text = "Vous devez remplir le champ 'pseudo'.\n"
            }

            callback(pseudoLibre)
        })
}

export function emailValide(email, callback) {
    var emailValide = {
        etat: false,
        text: ""
    }

    if(email != "") {
        if(email.match(/^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/)) {
            emailValide.etat = true
        }
        else {
            emailValide.etat = false
            emailValide.text = "Cette adresse mail n'est pas valide (Ce champ n'est pas obligatoire).\n"
        }
    }
    else {
        emailValide.etat = true
    }

    callback(emailValide)
}

export function mdpValide(mdp, callback) {
    var mdpValide = {
        etat: false,
        text: ""
    }

    if(mdp != "") {

        if(mdp.match(/[a-z]+/) && mdp.match(/[A-Z]+/) && mdp.match(/[0-9]+/) && mdp.length >= 8) {
            mdpValide.etat = true
        }
        else {
            mdpValide.text = "Votre mot de passe doit contenir une minuscule, une majuscule, un chiffre et doit comporter au moin 8 caractères.\n"
        }
    }
    else {
        mdpValide.text = "Vous devez remplir le champ 'mot de passe'.\n"
    }

    callback(mdpValide)
}
