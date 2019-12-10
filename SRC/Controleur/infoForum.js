import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'
import moment from 'moment'
sha1 = require('js-sha1');

export function getListSujets() {
    return requeteSQL("SELECT * FROM App_forum_sujets ORDER BY date DESC")
}

export function getDiscussion(nom) {
    nom = nom.replace(/ /g, '_')

    return requeteSQL("SELECT * FROM App_forum_" + nom + "_messages")
}

export function creerNouveauTopic(titre, description, auteur, nouvellePage) {

    requeteSQL("INSERT INTO App_forum_sujets(nom, auteur, date, resolu) VALUES('" + titre + "','" + auteur + "','" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss')  + "','false')")

    var nouveauTitre = titre.replace(/ /g, '_')
    requeteSQL("CREATE TABLE App_forum_" + nouveauTitre + "_messages (id INT NOT NULL AUTO_INCREMENT, auteur VARCHAR(100), content TEXT, date DATETIME, PRIMARY KEY (id))")
    .then(() => {
            if(description != "") {
                setTimeout(() => {
                    requeteSQL("INSERT INTO App_forum_" + nouveauTitre + "_messages(auteur, content, date) VALUES('" + auteur + "','" + description + "','" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + "')")

                    nouvellePage()
                }, 1000)
            }
        }
    )
}

export function envoyerMessage(content, auteur, titreSujet) {

    if(content != "") {
        titreSujet = titreSujet.replace(/ /g, '_')
        requeteSQL("INSERT INTO App_forum_" + titreSujet + "_messages(auteur, content, date) VALUES('" + auteur + "','" + content + "','" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + "')")
    }
}
