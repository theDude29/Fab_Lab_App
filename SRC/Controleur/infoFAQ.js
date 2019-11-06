import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getListQuestions(callback) {
    requeteSQL("SELECT * FROM phpboost_faq", callback)
}
