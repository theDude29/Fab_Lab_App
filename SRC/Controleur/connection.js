import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'
sha1 = require('js-sha1');

export function connection(pseudo, mdp, callback) {

    requeteSQL("SELECT * FROM App_compte_utilisateur").then(listItem => {
        var status = {etat: false, text: ""}

        if(pseudo != "") {
            var pseudoBon = false
            var mdpBon = false
            for(var item of listItem) {
                if(item.pseudo == pseudo) {
                    pseudoBon = true

                    if(item.mdp == sha1(mdp)) {
                        mdpBon = true
                    }
                }
            }

            if(!pseudoBon) {
                status.text = "Désolé ce compte n'existe pas, verifiez l'orthographe du pseudo."
            }
            else if (!mdpBon) {
                status.text = "Le mot de passe est faux."
            }
            else {
                status.text = "Bienvenue"
                status.etat = true
            }
        }
        else {
            status.text = "Entrez un pseudo."
        }

        callback(status)
    })
}
