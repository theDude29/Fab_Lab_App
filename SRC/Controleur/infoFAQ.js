import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function getListQuestions() {
    return requeteSQL("SELECT * FROM phpboost_faq")
}
