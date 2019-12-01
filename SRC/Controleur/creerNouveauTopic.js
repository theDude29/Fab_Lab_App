import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'
import moment from 'moment'

export function creerNouveauTopic(titre, auteur, nouvellePage) {
    var requete = "INSERT INTO App_forum_sujets(nom, auteur, date, resolu) VALUES('" + titre + "','" + auteur + "','" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss')  + "','false')"
    requeteSQL(requete)

    nouvellePage()
}
