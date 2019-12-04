import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'
import moment from 'moment'

export function getListSujets() {
    return requeteSQL("SELECT * FROM App_forum_sujets ORDER BY date DESC")
}

export function getDiscussion(nom) {
    return requeteSQL("SELECT * FROM App_forum_" + nom + "_messages")
}

export function creerNouveauTopic(titre, auteur, nouvellePage) {

    requeteSQL("INSERT INTO App_forum_sujets(nom, auteur, date, resolu) VALUES('" + titre + "','" + auteur + "','" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss')  + "','false')")

    requeteSQL("CREATE TABLE App_forum_" + titre + "_messages (id INT NOT NULL AUTO_INCREMENT, auteur VARCHAR(100), content TEXT, date DATETIME, PRIMARY KEY (id))")

    nouvellePage()
}
