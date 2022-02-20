import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FaceBook from './screens/fb';
import Instagram from './screens/in';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FaceBook},
  Instagram: {screen: Instagram}
});

const AppContainer = createAppContainer(TabNavigator);