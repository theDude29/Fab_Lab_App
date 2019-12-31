import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import A from 'react-native-a'

class Credits extends React.Component {
    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/credits.jpg')}
            >
                <View style={styles.main_container}>
                    <Text style={styles.default_text}>Cette application est dévellopée par Rémi Pérenne et est sous license <A style={styles.lien} href="https://www.gnu.org/licenses/gpl-3.0.txt">"GNU GENERAL PUBLIC LICENSE"</A>.</Text>
                    <Text style={styles.default_text}>Les sources du projets sont disponible sur <A style={styles.lien} href="https://github.com/theDude29/Fab_Lab_App">GitHube.</A></Text>
                    <Text style={styles.default_text}>N'ésitez pas à me contacter à cette adresse: remi.perenne@free.fr</Text>
                    <Text style={styles.default_text}>Aller faire un tour sur <A style={styles.lien} href="http://remi.perenne.free.fr">mon site</A> ;)</Text>
                    <Text style={styles.default_text}>Merci aux sites  <A style={styles.lien} href="https://pixabay.com/fr/">Pixabay</A> et  <A style={styles.lien} href="https://www.flaticon.com/">flaticon</A> pour leurs images et icons qui m'ont permis de rendre ce sites plus estetique.</Text>
                    <Text style={styles.default_text}>Et enfin un grand merci au site <A style={styles.lien} href="https://openclassrooms.com/fr/">Open Classroom</A> qui m'a apprit quasimment tous ce que je sais en programmation et
                    particulièrement à <A style={styles.lien} href="https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native">ce tuto</A> qui m'a permis de faire cette application mobile.</Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    default_text: {
        color: "white",
        fontSize: 20,
        //fontFamily: 'futuriste'
    },
    lien: {
        color: "cyan",
        fontSize: 20,
        fontStyle: 'italic'
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(100,100,100,0.5)',
        borderRadius: 20,
    }
})

export default Credits
