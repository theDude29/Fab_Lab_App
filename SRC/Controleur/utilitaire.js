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

    if(requete.match(/SELECT/)) {
        requete = requete.replace(/SELECT/, "SELECT SQL_NO_CACHE")
        return loadFile("queryRequeteSQL.php?sql=" + requete).then((data) => JSON.parse(decodeDBTextToNormalText(data)))
    }

    if(requete.match(/DELETE|INSERT|UPDATE|CREATE/)) {
        return loadFile("execRequeteSQL.php?sql=" + requete)
    }
}
