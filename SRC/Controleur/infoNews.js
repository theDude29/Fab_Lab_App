import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getListNews() {
    return requeteSQL("SELECT * FROM phpboost_news ORDER BY creation_date DESC")
}
