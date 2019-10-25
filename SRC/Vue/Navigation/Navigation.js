import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import Presentation from '../Components/Presentation'
import Articles from '../Components/Articles'
import Forum from '../Components/Forum'
import Mon_compte from '../Components/Mon_compte'
import Parametres from '../Components/Parametres'

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Presentation,
    navigationOptions: {
        title: 'Home'
    }
  },
  Articles: {
      screen: Articles,
      navigationOptions: {
          title: 'Articles'
      }
  },
  Forum: {
      screen: Forum,
      navigationOptions: {
          title: 'Forums'
      }
  },
  Mon_compte: {
      screen: Mon_compte,
      navigationOptions: {
          title: 'Mon compte'
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
