import React from 'react'
import {View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native'
import {convertHTMLtoText} from '../../../Controleur/utilitaire'
import moment from 'moment'

class NewsDetail extends React.Component {

    constructor(props) {
        super(props)

        if(!this.props.navigation.state.params.news.picture_url.match(/http/)) {
            this.props.navigation.state.params.news.picture_url = "https://fablab-dedale.fr/phpboost" + this.props.navigation.state.params.news.picture_url
        }
    }

    render() {
        news = this.props.navigation.state.params.news
        return (
            <ImageBackground style={styles.image} source={{uri: news.picture_url}}>
            <ScrollView>
                <View style={styles.main_container}>
                    <Text style={styles.title_text}>{convertHTMLtoText(news.name)}</Text>
                    <Text style={styles.default_text}>{convertHTMLtoText(news.contents)}</Text>
                    <Text style={styles.author_text}>{"Posté par " + convertHTMLtoText(news.author_custom_name) + " le " + moment(new Date(news.date_created * 1000)).format('DD/MM/YYYY')}</Text>
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
    author_text: {
        color: "black",
        fontSize: 18,
        margin: 15
    },
    main_container: {
        backgroundColor: 'rgba(220,220,220,0.5)',
        borderRadius: 20,
        margin: 10,
        marginTop: 20
    }
})

export default NewsDetail
