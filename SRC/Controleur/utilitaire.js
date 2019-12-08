import {loadFile} from '../Model/LoadFile'

export function convertHTMLtoText(text) {
    var newText = text.replace(/<br \/>^<br \/>/g, '\n')

    var newText = newText.replace(/<[^>]*>/g, '')

    return newText
}

export function encodeNormalTextToDBText(text) {
    text = text.replace(/\+/g, "PLUS_SYMBOL")

    return text
}

export function decodeDBTextToNormalText(text) {
    text = text.replace(/PLUS_SYMBOL/g, '+')

    return text
}

export function requeteSQL(requete) {

    requete = encodeNormalTextToDBText(requete)

    this.reponse = ""

    if(requete.match(/SELECT/)) {
        return loadFile("queryRequeteSQL.php?sql=" + requete)
    }
    
    if(requete.match(/DELETE|INSERT|UPDATE|CREATE/)) {
        return loadFile("execRequeteSQL.php?sql=" + requete)
    }
}
