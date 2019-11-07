import React from 'react'
import {requeteSQL} from '../Controleur/utilitaire'

export function creerNouveauCompte(pseudo, mdp, email) {
    requeteSQL("INSERT INTO App-compte_utilisateur (pseudo, mdp, email) VALUES('" + pseudo + "','" + mdp + "','" + email + "')")
}
