import React from 'react'
import {requeteSQL} from '../Model/LoadFile'

export function getListArticles(callback) {
    requeteSQL("SELECT * FROM phpboost_articles", callback)
}
