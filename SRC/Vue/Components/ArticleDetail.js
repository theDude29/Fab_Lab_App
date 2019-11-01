import React from 'react'
import {View, Text, ImageBackground, StyleSheet, ScrollView, FlatList} from 'react-native'
import {convertHTMLtoText} from '../../Controleur/utilitaire'

class ArticleDetail extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        article = this.props.navigation.state.params.article
        return (
            <ImageBackground style={styles.image} source={{uri: article.picture_url}}>
            <ScrollView>
                <View style={styles.main_container}>
                    <Text style={styles.title_text}>{convertHTMLtoText(article.title)}</Text>
                    <Text style={styles.default_text}>{convertHTMLtoText(article.contents)}</Text>
                    <Text style={styles.default_text}>{"Auteur: " + convertHTMLtoText(article.author_custom_name)}</Text>
                </View>
            </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    title_text: {
        margin: 10,
        fontSize: 40,
        textAlign: 'center',
        color: 'brown'
    },
    default_text: {
        color: "black",
        fontSize: 23,
        margin: 20
    },
    main_container: {
        backgroundColor: 'rgba(220,220,220,0.5)',
        borderRadius: 20,
        margin: 10,
        marginTop: 20
    }
})

export default ArticleDetail
