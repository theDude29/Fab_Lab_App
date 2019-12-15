import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

class WarningPasConnecte extends React.Component {

    constructor(props) {
    super(props)
  }


    render() {
        return (
            <View style={styles.warning_container}>
                <Text>Vous n'êtes pas connecté, créez un compte ou connectez vous dans la partie "Mon compte" pour pouvoir poster des messages et créer des sujets sur le forum.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    warning_container: {
        backgroundColor: 'rgba(200,0,0,0.5)',
        borderRadius: 10,
        margin: 10,
        padding: 8
    }
})

export default WarningPasConnecte
