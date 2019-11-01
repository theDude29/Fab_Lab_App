import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getListArticles(callback) {
    requeteSQL("SELECT * FROM phpboost_articles", callback)
}
