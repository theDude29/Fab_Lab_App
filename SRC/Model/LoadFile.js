ADRESSE_SERVEUR = "http://192.168.0.5/test/App/"

export function loadFile(file) {

    var url = ADRESSE_SERVEUR + file

    return await fetch(url).then((response) => response.json())
}
