import React from 'react'
import {View, Text, ImageBackground, StyleSheet, ScrollView, FlatList} from 'react-native'
import ArticleItem from './ArticleItem'
import * as InfoArticles from '../../Controleur/infoArticles'

class Articles extends React.Component {

    constructor(props) {
        super(props)

        this._majListArticles = this._majListArticles.bind(this)

        this.state = {
            listArticles: undefined
        }

        InfoArticles.getListArticles(this._majListArticles)
    }

    _majListArticles(data) {
        this.setState({listArticles: data})
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
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    default_text: {
        color: "white",
        fontSize: 30,
        fontFamily: 'futuriste'
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 15,
        paddingTop: 80
    }
})

export default Articles
