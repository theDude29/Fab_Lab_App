function loadFile(file, callback) {

    var xhr = new XMLHttpRequest();

    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    xhr.open('GET', file);

    xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

        if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) { // Si le fichier est chargé sans erreur

            callback(xhr.responseText)
        }

        else if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status != 200 || xhr.status != 0)) { // En cas d'erreur !

        console.log(('Une erreur est survenue !\n\nCode :' + xhr.status + '\nTexte : ' + xhr.statusText))
        }
    });

    xhr.send(null); // La requête est prête, on envoie tout !

}

export default loadFile