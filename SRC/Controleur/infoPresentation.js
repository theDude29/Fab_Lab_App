import React from 'react'
import ArticleItem from '../Vue/Components/ArticleItem'
import loadFile from '../Model/LoadFile'

export function getDescription(callback) {
    loadFile("http://192.168.0.5/test/App/requeteSQL.php", callback)
}

export function getLastArticle() {
    return <ArticleItem />
}
