ADRESSE_SERVEUR = "https://fablab-dedale.fr/App/php/" //"https://fablab-dedale.fr/App/php/" //"http://192.168.0.5/test/App/"

export function loadFile(file) {

    console.log(file)

    return fetch(file).then((response) => response.text())
}
