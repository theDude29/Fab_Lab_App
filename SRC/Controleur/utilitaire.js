import {loadFile} from '../Model/LoadFile'

export function convertHTMLtoText(text) {
    var newText = text.replace(/<br \/>^<br \/>/g, '\n')

    var newText = newText.replace(/<[^>]*>/g, '')

    return newText
}

export function requeteSQL(requete) {

    if(requete.match(/SELECT/)) {
        return loadFile("queryRequeteSQL.php?sql=" + requete)
    }
    if(requete.match(/DELETE|INSERT|UPDATE/)) {
        loadFile("execRequeteSQL.php?sql=" + requete)
    }
}
