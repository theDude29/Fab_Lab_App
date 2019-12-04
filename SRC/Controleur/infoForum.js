import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getListSujets() {
    return requeteSQL("SELECT * FROM App_forum_sujets ORDER BY date DESC")
}

export function getDiscussion(id) {
    console.log("SELECT * FROM App_forum_" + id + "_messages")
    return requeteSQL("SELECT * FROM App_forum_" + id + "_messages")
}
