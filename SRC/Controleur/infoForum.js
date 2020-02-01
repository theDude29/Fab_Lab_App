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

export function envoyerMessageAuMembresFLD(content) {

    requeteSQL("SELECT * FROM App_fablabMembres_id").then(data => {

        for(var i = 0; i < data.length; i+=1) {
            var messagePerso = content.replace(/NOM/g, data[i].nom)
            var requete = "INSERT INTO phpboost_pm_msg(idconvers, user_id, contents) VALUES(" + data[i].id_phpboost + ", -1, '" + messagePerso + "')"
            requeteSQL(requete)
        }
    })
}

export function creerNouveauTopic(titre, description, auteur, nouvellePage) {

    //ne pas mettre de caractère enmerdant dans ce message comme les apostrophes etc...
    envoyerMessageAuMembresFLD("Salut NOM un nouveau topic a été créé sur l app du FabLab son titre est " + titre + ", peux tu aider cette personne ?")

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
