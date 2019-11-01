import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getDescription(callback) {
    var modif = function(data) {
        callback(data[0].description_app)
    }
    modif = modif.bind(this)

    requeteSQL("SELECT * FROM App", modif)
}
