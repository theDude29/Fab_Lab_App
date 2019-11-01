import {loadFile} from '../Model/LoadFile'

export function convertHTMLtoText(text) {
    var newText = text.replace(/<br \/>^<br \/>/g, '\n')

    var newText = newText.replace(/<[^>]*>/g, '')

    return newText
}

export function requeteSQL(requete, callback) {
    loadFile("requeteSQL.php?sql=" + requete, callback)
}
