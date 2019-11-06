import {loadFile} from '../Model/LoadFile'

export function convertHTMLtoText(text) {
    var newText = text.replace(/<br \/>^<br \/>/g, '\n')

    var newText = newText.replace(/<[^>]*>/g, '')

    return newText
}

export function requeteSQL(requete, callback) {

    if(requete.match(/SELECT/)) {
        loadFile("queryRequeteSQL.php?sql=" + requete, callback)
    }
    if(requete.match(/DELETE|INSERT|UPDATE/)) {
        loadFile("execRequeteSQL.php?sql=" + requete)
    }
}
