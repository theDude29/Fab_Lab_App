import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getListSujets() {
    return requeteSQL("SELECT * FROM App_forum_sujets")
}
