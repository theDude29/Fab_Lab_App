import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'

import Presentation from '../Components/Presentation/Presentation'

import Articles from '../Components/Articles/Articles'
import ArticleDetail from '../Components/Articles/ArticleDetail'

import Forum from '../Components/Forum/Forum'
import CreationTopic from '../Components/Forum/CreationTopic'
import Discussion from '../Components/Forum/Discussion'

import Faq from '../Components/FAQ/FAQ'

import CreationCompte from '../Components/Compte/CreationCompte'
import AcceuilCompte from '../Components/Compte/AcceuilCompte'
import ConnectionCompte from '../Components/Compte/ConnectionCompte'
import Mon_compte from '../Components/Compte/Mon_compte'
import PasConnecte from '../Components/Compte/PasConnecte'

import Parametres from '../Components/Parametres/Parametres'
import Credits from '../Components/Parametres/Credits'

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

const ForumStackNavigator = createStackNavigator({
  Acceuil: {
    screen: Forum,
    navigationOptions: {
      title: 'Forums'
    }
  },
  CreationTopic: {
      screen: CreationTopic,
      navigationOptions: {
          title: 'Création d\'un sujet'
      }
  },
  Discussion: {
      screen: Discussion,
      navigationOptions: {
          title: 'Discussion'
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
  },
  PasConnecte: {
      screen: PasConnecte,
      navigationOptions: {
          title: "Pas connecté"
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
      	      screen: ForumStackNavigator,
      	      navigationOptions: {
      		  title: 'Forums'
      	      }
      	  },
	Compte: {
	      screen: CompteStackNavigator,
	      navigationOptions: {
		  title: 'Mon compte'
	      }
	  },
	  Parametres: {
	      screen: ParametreStackNavigator,
	      navigationOptions: {
		  title: 'Paramètres'
		    }
	      },
	  },
    {
        drawerBackgroundColor: 'green',
        drawerType: 'slide',
        hideStatusBar: 'true'
    }
);

export default createAppContainer(MyDrawerNavigator)
