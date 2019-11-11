import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getDescription() {
    var data = requeteSQL("SELECT * FROM App_description")
    return data[0].description_app
}
