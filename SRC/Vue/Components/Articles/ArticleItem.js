import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import {convertHTMLtoText} from '../../../Controleur/utilitaire'

class ArticleItem extends React.Component {

    _getTitle() {
        return convertHTMLtoText(this.props.article.title)
    }

    _getContent() {
        return convertHTMLtoText(this.props.article.contents)
    }

    _getAuthor() {
        var nomAuteur = convertHTMLtoText(this.props.article.author_custom_name)
        if(nomAuteur == "") {
            nomAuteur = "Anomyme"
        }
        return ("Auteur: " + nomAuteur)
    }

    render() {
        const displayDetail = this.props.displayDetail
        return (
            <ImageBackground style={styles.image} source={{uri: this.props.article.picture_url}}>
                <TouchableOpacity
                style={styles.main_container}
                onPress={() => displayDetail(this.props.article)}
                >
                    <Text style={styles.title_text}>{this._getTitle()}</Text>
                    <Text style={styles.default_text} numberOfLines={4}>{this._getContent()}</Text>
                    <Text style={styles.author_text}>{this._getAuthor()}</Text>
                </TouchableOpacity>
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
