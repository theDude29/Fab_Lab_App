import React from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList} from 'react-native'
import ArticleItem from './ArticleItem'
import * as InfoArticles from '../../Controleur/infoArticles'

class Articles extends React.Component {

    constructor(props) {
        super(props)

        this._displayDetailForArticle = this._displayDetailForArticle.bind(this)

        this.state = {
            listArticles: undefined
        }

        this._chargerArticles = this._chargerArticles.bind(this)
        this._chargerArticles()
    }

    _displayArticles() {
        if(this.state.listArticles != undefined)
        {
            return (
                <FlatList
                    style={styles.list}
                  data={this.state.listArticles}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => (
                    <ArticleItem
                      article={item}
                      displayDetail={this._displayDetailForArticle}
                    />
                  )}
                />
            )
        }
    }

    render() {
        return (
            <ImageBackground style={styles.image} source={require('../ressources/images/articles.jpg')}>
                {this._displayArticles()}
            </ImageBackground>
        )
    }

    _chargerArticles() {
        InfoArticles.getListArticles(this._majListArticles).then(data => {
            this.setState({listArticles: data})
        })
    }

    _displayDetailForArticle(article) {
        this.props.navigation.navigate('ArticleDetail', {article: article})
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 110,
    }
})

export default Articles
