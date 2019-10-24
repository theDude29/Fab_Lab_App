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
  },
  Articles: {
      screen: Articles,
  },
  Forum: {
      screen: Forum,
  },
  Mon_compte: {
      screen: Mon_compte,
  },
  Parametres: {
      screen: Parametres
  }
});

export default createAppContainer(MyDrawerNavigator)
