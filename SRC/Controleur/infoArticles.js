import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getListArticles() {
    return requeteSQL("SELECT * FROM phpboost_articles WHERE id_category != 5")
}
