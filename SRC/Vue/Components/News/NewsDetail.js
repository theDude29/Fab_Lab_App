import React from 'react'
import {View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native'
import {convertHTMLtoText, encadreHTML} from '../../../Controleur/utilitaire'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'

class NewsDetail extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        news = this.props.navigation.state.params.news
        return (
            <ImageBackground style={styles.image} source={require("../../ressources/images/news_default.jpg")}>
            <ScrollView>
                <View style={styles.main_container}>
                    <Text style={styles.title_text}>{convertHTMLtoText(news.name)}</Text>
                    <HTMLView stylesheet={stylesHTML} value={encadreHTML(news.contents)} />
                    <Text style={styles.author_text}>{"Posté par " + convertHTMLtoText(news.author_custom_name) + " le " + moment(new Date(news.creation_date * 1000)).format('DD/MM/YYYY')}</Text>
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
        color: 'brown',
        fontFamily: "CharlemagneStd-Bold"
    },
    default_text: {
        color: "black",
        fontSize: 23,
        margin: 20,
        fontFamily: "CharlemagneStd-Bold"
    },
    author_text: {
        color: "black",
        fontSize: 18,
        margin: 15,
        fontFamily: "CharlemagneStd-Bold"
    },
    main_container: {
        backgroundColor: 'rgba(220,220,220,0.5)',
        borderRadius: 20,
        margin: 10,
        marginTop: 20
    }
})

const stylesHTML = StyleSheet.create({
    p: {
        color: "black",
        fontSize: 23,
        margin: 20,
        fontFamily: "CharlemagneStd-Bold"
    },
    a: {
        color: 'cyan',
        fontFamily: "CharlemagneStd-Bold"
    }
})

export default NewsDetail
