import React from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native'

class ArticleItem extends React.Component {

    constructor(props) {
        super(props)

        console.log("------------------------")
        console.log(this.props.article)
    }

    _getTitle() {
        return this.props.article.title
    }

    _getContent() {
        return this.props.article.contents
    }

    _getAuthor() {
        return ("Auteur: " + this.props.article.author_custom_name)
    }

    render() {
        return (
            <ImageBackground style={styles.image} source={{uri: this.props.article.picture_url}}>
                <Text style={styles.title_text}>{this._getTitle()}</Text>
                <Text style={styles.default_text} numberOfLines={4}>{this._getContent()}</Text>
                <Text style={styles.author_text}>{this._getAuthor()}</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        padding: 20,
        margin: 25,
        borderWidth: 10
    },
    title_text: {
        color: 'brown',
        fontSize: 30,
        fontFamily: 'futuriste',
        textAlign: 'center'
    },
    default_text: {
        color: "white",
        fontSize: 20,
        fontFamily: 'futuriste'
    },
    author_text: {
        color: "yellow",
        fontSize: 15,
        fontFamily: 'futuriste'
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(200,200,200,0.5)',
        borderRadius: 20,
        borderWidth: 5,
    }
})

export default ArticleItem
