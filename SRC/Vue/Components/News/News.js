import React from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList} from 'react-native'
import NewsItem from './NewsItem'
import * as InfoNews from '../../../Controleur/infoNews'
import Navigator from '../Autres/Navigator'

class News extends React.Component {

    constructor(props) {
        super(props)

        this._displayDetailForNews = this._displayDetailForNews.bind(this)

        this.state = {
            listNews: undefined
        }

        this._chargeNews = this._chargerNews.bind(this)
        this._chargerNews()
    }

    _displayNews() {
        if(this.state.listNews != undefined)
        {
            return (
                <FlatList
                    style={styles.list}
                  data={this.state.listNews}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => (
                    <NewsItem
                      news={item}
                      displayDetail={this._displayDetailForNews}
                    />
                  )}
                />
            )
        }
    }

    render() {
        return (
            <ImageBackground style={styles.image} source={require('../../ressources/images/articles.jpg')}>
                <Navigator navigation={this.props.navigation}/>
                {this._displayNews()}
            </ImageBackground>
        )
    }

    _chargerNews() {
        InfoNews.getListNews().then(data => {
            this.setState({listNews: data})
        })
    }

    _displayDetailForNews(news) {
        this.props.navigation.navigate('NewsDetail', {news: news})
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    list: {

    }
})

export default News
