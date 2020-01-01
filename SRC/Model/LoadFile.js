ADRESSE_SERVEUR = "https://fablab-dedale.fr/App_php/" //"http://192.168.0.5/test/App/"

export function loadFile(file) {

    var url = ADRESSE_SERVEUR + file

    return fetch(url).then((response) => response.text())
}
