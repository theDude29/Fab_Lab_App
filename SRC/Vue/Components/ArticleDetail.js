import React from 'react'
import {View, Text, ImageBackground, StyleSheet, ScrollView, FlatList} from 'react-native'

class ArticleDetail extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <ImageBackground style={styles.image} source={{uri: "https://fablab-dedale.fr/assets/img/iphone.jpg"}}>
            <ScrollView>
                <View style={styles.main_container}>
                    <Text style={styles.title_text}>Title</Text>
                    <Text style={styles.default_text}>Content...</Text>
                    <Text style={styles.default_text}>Auteur...</Text>
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
        fontSize: 30,
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
