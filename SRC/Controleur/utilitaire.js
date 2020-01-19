ADRESSE_SERVEUR_FAB_LAB = "https://fablab-dedale.fr/App/php/" //"https://fablab-dedale.fr/App/php/" //"http://192.168.0.5/test/App/"
ADRESSE_SERVEUR_APP = "http://remi.perenne.free.fr/App/php/"

import {loadFile} from '../Model/LoadFile'

export function convertHTMLtoText(text) {
    var newText = text.replace(/<br \/>^<br \/>/g, '\n')

    var newText = newText.replace(/<[^>]*>/g, '')

    return newText
}

export function encadreHTML(text) {
    return "<p>" + text + "</p>"
}

export function encodeNormalTextToDBText(text) {
    text = text.replace(/\+/g, "PP")
    text = text.replace(/\?/g, "QQ")

    return text
}

export function decodeDBTextToNormalText(text) {
    text = text.replace(/PP/g, '+')
    text = text.replace(/QQ/g, '?')
    text = text.replace(/AA/g, '\'')

    return text
}

export function requeteSQL(requete) {

    requete = encodeNormalTextToDBText(requete)

    var serveur = ADRESSE_SERVEUR_APP
    if(requete.match(/phpboost/)) {
        serveur = ADRESSE_SERVEUR_FAB_LAB
    }

    if(requete.match(/SELECT/)) {
        requete = requete.replace(/SELECT/, "SELECT SQL_NO_CACHE")
        return loadFile(serveur + "queryRequeteSQL.php?sql=" + requete).then((data) => JSON.parse(decodeDBTextToNormalText(data)))
    }

    if(requete.match(/DELETE|INSERT|UPDATE|CREATE/)) {
        return loadFile(serveur + "execRequeteSQL.php?sql=" + requete)
    }
}
