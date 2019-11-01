import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import Presentation from '../Components/Presentation'
import Articles from '../Components/Articles'
import Forum from '../Components/Forum'
import Mon_compte from '../Components/Mon_compte'
import Parametres from '../Components/Parametres'
import Faq from '../Components/FAQ'
import ArticleDetail from '../Components/ArticleDetail'
import CreationCompte from '../Components/CreationCompte'
import AcceuilCompte from '../Components/AcceuilCompte'

const ArticleStackNavigator = createStackNavigator({
  Articles: {
    screen: Articles,
    navigationOptions: {
      title: 'Derniers articles'
    }
  },
  ArticleDetail: {
    screen: ArticleDetail,
    navigationOptions: {
        title: 'Detail de l\'article'
    }
  }
})

const CompteStackNavigator = createStackNavigator({
  AcceuilCompte: {
    screen: AcceuilCompte,
    navigationOptions: {
      title: 'Mon compte'
    }
  },
  CreationCompte: {
    screen: CreationCompte,
    navigationOptions: {
        title: 'Créer votre compte'
    }
  }
})

const MyDrawerNavigator = createDrawerNavigator({
    Mon_compte: {
        screen: CompteStackNavigator,
        navigationOptions: {
            title: 'Mon compte'
        }
    },
  Home: {
    screen: Presentation,
    navigationOptions: {
        title: 'Home'
    }
  },
  Articles: {
      screen: ArticleStackNavigator,
      navigationOptions: {
          title: 'Articles'
      }
  },
  Faq: {
      screen: Faq,
      navigationOptions: {
          title: 'FAQ'
      }

  },
  Forum: {
      screen: Forum,
      navigationOptions: {
          title: 'Forums'
      }
  },
  Parametres: {
      screen: Parametres,
      navigationOptions: {
          title: 'Paramètres'
            }
        }
    },
    {
        drawerBackgroundColor: 'green',
        drawerType: 'slide',
        hideStatusBar: 'true'
    }
);

export default createAppContainer(MyDrawerNavigator)
