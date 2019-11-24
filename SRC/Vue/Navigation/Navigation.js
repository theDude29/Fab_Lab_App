import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import Presentation from '../Components/Presentation'
import Articles from '../Components/Articles'
import Forum from '../Components/Forum'
import Parametres from '../Components/Parametres'
import Faq from '../Components/FAQ'
import ArticleDetail from '../Components/ArticleDetail'
import CreationCompte from '../Components/CreationCompte'
import AcceuilCompte from '../Components/AcceuilCompte'
import ConnectionCompte from '../Components/ConnectionCompte'
import Credits from '../Components/Credits'
import Mon_compte from '../Components/Mon_compte'

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
      title: 'Compte'
    }
  },
  CreationCompte: {
    screen: CreationCompte,
    navigationOptions: {
        title: 'Créer votre compte'
    }
  },
  ConnectionCompte: {
      screen: ConnectionCompte,
      navigationOptions: {
          title: 'Connectez-vous'
      }
  },
  Mon_compte: {
      screen: Mon_compte,
      navigationOptions: {
          title: 'Mon compte'
      }
  }
})

const ParametreStackNavigator = createStackNavigator({
  AcceuilParametre: {
    screen: Parametres,
    navigationOptions: {
      title: 'Paramètres'
    }
  },
  Credits: {
    screen: Credits,
    navigationOptions: {
        title: 'Crédits'
    }
  }
})

const MyDrawerNavigator = createDrawerNavigator({

    Compte: {
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
      screen: ParametreStackNavigator,
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
