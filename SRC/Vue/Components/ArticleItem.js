import React from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native'

class ArticleItem extends React.Component {

    _getTitle() {
        return ("titre")
    }

    _getContent() {
        return ("content............")
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_text}>{this._getTitle()}</Text>
                <Text style={styles.default_text}>{this._getContent()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title_text: {
        color: 'brown',
        fontSize: 30,
        fontFamily: 'futuriste'
    },
    default_text: {
        color: "white",
        fontSize: 20,
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
