import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'
import moment from 'moment'

export function creerNouveauTopic(titre, auteur, nouvellePage, content) {

    requeteSQL("INSERT INTO App_forum_sujets(nom, auteur, date, resolu) VALUES('" + titre + "','" + auteur + "','" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss')  + "','false')")

    requeteSQL("CREATE TABLE App_forum_" + titre + "_messages (id INT NOT NULL AUTO_INCREMENT, auteur VARCHAR(100), content TEXT, date DATETIME, PRIMARY KEY (id))")

    if(content != "") {
        requeteSQL("INSERT INTO App_forum_" + titre + "_messages(auteur, content, date) VALUES(\'REMI\',\'" + content + "\',\'" +  moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + "\')")
    }
    
    nouvellePage()
}
