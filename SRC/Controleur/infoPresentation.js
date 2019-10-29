import React from 'react'
import ArticleItem from '../Vue/Components/ArticleItem'
import loadFile from '../Model/LoadFile'

export function getDescription(callback) {
    var modif = function(data) {
        callback(data[0].description_app)
    }
    modif = modif.bind(this)

    loadFile("http://192.168.0.5/test/App/requeteSQL.php?sql=SELECT_*_FROM_App", modif)
}

export function getLastArticle() {
    return <ArticleItem />
}
