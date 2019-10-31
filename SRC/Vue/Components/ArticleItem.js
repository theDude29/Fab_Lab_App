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
        var nomAuteur = this.props.article.author_custom_name
        if(nomAuteur == "") {
            nomAuteur = "Anomyme"
        }
        return ("Auteur: " + nomAuteur)
    }

    render() {
        return (
            <ImageBackground style={styles.image} source={{uri: this.props.article.picture_url}}>
                <View style={styles.main_container}>
                    <Text style={styles.title_text}>{this._getTitle()}</Text>
                    <Text style={styles.default_text} numberOfLines={4}>{this._getContent()}</Text>
                    <Text style={styles.author_text}>{this._getAuthor()}</Text>
                </View>
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
        fontSize: 20,
        //fontFamily: 'futuriste',
        textAlign: 'center'
    },
    default_text: {
        color: "black",
        fontSize: 15,
        //fontFamily: 'futuriste'
    },
    author_text: {
        color: "yellow",
        fontSize: 10,
        //fontFamily: 'futuriste'
    },
    main_container: {
        padding: 15,
        backgroundColor: 'rgba(200,200,200,0.5)',
        borderRadius: 20,
    }
})

export default ArticleItem
