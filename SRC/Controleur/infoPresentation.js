import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getDescription() {
    return requeteSQL("SELECT * FROM App_description")
}
