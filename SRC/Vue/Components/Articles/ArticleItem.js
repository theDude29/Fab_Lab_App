import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import {convertHTMLtoText, getMemberNameFromID} from '../../../Controleur/utilitaire'

class ArticleItem extends React.Component {

    constructor(props) {
        super(props)

        if(!this.props.article.picture_url.match(/http/)) {
            this.props.article.picture_url = "https://fablab-dedale.fr/phpboost" + this.props.article.picture_url
        }

        this.state = {
            auteur: undefined
        }

        this._getAuthor = this._getAuthor.bind(this)
        this._getAuthor()
    }

    _getTitle() {
        return convertHTMLtoText(this.props.article.title)
    }

    _getContent() {
        return convertHTMLtoText(this.props.article.contents)
    }

    _getAuthor() {
        getMemberNameFromID(this.props.article.author_user_id).then(data => {
            this.setState({auteur: data[0].display_name}, () => {this.props.article.author_custom_name = this.state.auteur})
        })
    }

    render() {
        const displayDetail = this.props.displayDetail
        return (
		<View style={{alignItems: 'center'}}>
		    <ImageBackground style={styles.image} source={{uri: this.props.article.picture_url}}>
		        <TouchableOpacity
		        style={styles.main_container}
		        onPress={() => displayDetail(this.props.article)}
		        >
		            <Text style={styles.title_text}>{this._getTitle()}</Text>
		            <Text style={styles.default_text} numberOfLines={4}>{this._getContent()}</Text>
		            <Text style={styles.author_text}>{"Auteur: " + this.state.auteur}</Text>
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
        textAlign: 'center',
        fontFamily: "CharlemagneStd-Bold"
    },
    default_text: {
        color: "black",
        fontSize: 15,
        fontFamily: "CharlemagneStd-Bold"
    },
    author_text: {
        color: "rgb(55,150,50)",
        fontSize: 10,
        fontFamily: "CharlemagneStd-Bold"
    },
    main_container: {
        padding: 12,
        backgroundColor: 'rgba(200,200,200,0.5)',
        borderRadius: 20,
	width: '70%'
    }
})

export default ArticleItem
