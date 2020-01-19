import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import {convertHTMLtoText} from '../../../Controleur/utilitaire'

class NewsItem extends React.Component {

    constructor(props) {
        super(props)
    }

    _getTitle() {
        return convertHTMLtoText(this.props.news.name)
    }

    _getContent() {
        return convertHTMLtoText(this.props.news.contents)
    }

    _getAuthor() {
        var nomAuteur = convertHTMLtoText(this.props.news.author_custom_name)
        if(nomAuteur == "") {
            nomAuteur = "Anomyme"
            this.props.news.author_custom_name = nomAuteur
        }
        return ("Auteur: " + nomAuteur)
    }

    render() {
        const displayDetail = this.props.displayDetail
        return (
		<View style={{alignItems: 'center'}}>
		    <ImageBackground style={styles.image} source={require("../../ressources/images/news_default.jpg")}>
		        <TouchableOpacity
    		        style={styles.main_container}
    		        onPress={() => displayDetail(this.props.news)}
		        >
		            <Text style={styles.title_text}>{this._getTitle()}</Text>
		            <Text style={styles.default_text} numberOfLines={4}>{this._getContent()}</Text>
		            <Text style={styles.author_text}>{this._getAuthor()}</Text>
		        </TouchableOpacity>
		    </ImageBackground>
		</View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        alignItems: 'center',
    	justifyContent: 'center',
    	margin: 30
    },
    title_text: {
        color: 'brown',
        fontSize: 20,
        textAlign: 'center'
    },
    default_text: {
        color: "black",
        fontSize: 15,
    },
    author_text: {
        color: "yellow",
        fontSize: 10,
    },
    main_container: {
        padding: 12,
        backgroundColor: 'rgba(200,200,200,0.5)',
        borderRadius: 20,
	    width: '70%'
    }
})

export default NewsItem
