import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'
import moment from 'moment'
sha1 = require('js-sha1');

export function getListSujets() {
    return requeteSQL("SELECT * FROM App_forum_sujets ORDER BY date DESC")
}

export function getDiscussion(nom) {
    nom = nom.replace(/ /g, '_')
    nom = nom.replace(/'/g, "AA")

    return requeteSQL("SELECT *, NOW() FROM App_forum_" + nom + "_messages")
}

export function creerNouveauTopic(titre, description, auteur, nouvellePage) {

    titre = titre.replace(/'/g, "AA")
    requeteSQL("INSERT INTO App_forum_sujets(nom, auteur, date, resolu) VALUES('" + titre + "','" + auteur + "','" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss')  + "','false')")

    titre = titre.replace(/ /g, '_')
    requeteSQL("CREATE TABLE App_forum_" + titre + "_messages (id INT NOT NULL AUTO_INCREMENT, auteur VARCHAR(100), content TEXT, date DATE, PRIMARY KEY (id))")
    .then(() => {
        setTimeout(() => {
            if(description != "") {
                description = description.replace(/'/g, 'AA')
                requeteSQL("INSERT INTO App_forum_" + titre + "_messages(auteur, content, date) VALUES('" + auteur + "','" + description + "','" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + "')")
            }

            nouvellePage()
        }, 3000)
    })
}

export function envoyerMessage(content, auteur, titreSujet) {

    if(content != "") {
        titreSujet = titreSujet.replace(/ /g, '_')
        titreSujet = titreSujet.replace(/'/g, "AA")
        requeteSQL("INSERT INTO App_forum_" + titreSujet + "_messages(auteur, content, date) VALUES('" + auteur + "','" + content + "','" +  moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + "')")
    }
}
