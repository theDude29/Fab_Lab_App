import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import moment from 'moment'

class ForumItem extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.main_container}
            >
                <Text style={styles.title_text}>{this.props.sujet.nom}</Text>
                <View style={styles.info_container}>
                    <Text style={styles.info_text}>{"Par " + this.props.sujet.auteur + " le " + moment(new Date(this.props.sujet.date)).format('DD/MM/YYYY')}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: 'rgba(0,100,0,0.5)',
        borderRadius: 10,
        margin: 15,
        padding: 10
    },
    info_container: {
        alignItems: 'flex-end'
    },
    title_text: {
        fontSize: 22,
        color: 'white'
    },
    info_text: {
        marginTop: 5,
        fontSize: 15,
        color: 'white'
    }
})

export default ForumItem
