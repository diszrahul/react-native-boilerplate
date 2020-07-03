/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:52:24
 * @modify date 2020-05-06 09:52:24
 * @desc [All routing is handled through here]
 */

import React from 'react';
import {Image, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Discovery from '../components/viewcontrollers/discovery/DiscoveryContainer.js';
import Profile from '../components/viewcontrollers/profile/Profile.js';
import LoginScreen from '../components/viewcontrollers/onboarding/login/LoginContainer.js';
import RegisterScreen from '../components/viewcontrollers/onboarding/register/RegisterContainer.js';
import Splash from '../components/viewcontrollers/onboarding/splash/SplashContainer.js';
import {NavigationRoutes} from '../constants/Constants';
import myicon from '../images/example.png';

const goTabs = createBottomTabNavigator(  
  {
    [NavigationRoutes.Discovery]: Discovery,
    [NavigationRoutes.Profile]: Profile,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;

        var iconName = '';
        if (routeName === NavigationRoutes.Profile) {
          if (focused) {
            iconName = require('../images/example.png');
          } else {
            iconName = require('../images/example.png');
          }
        } else if (routeName === NavigationRoutes.Discovery) {
          if (focused) {
            iconName = require('../images/example.png');
          } else {
            iconName = require('../images/example.png');
          }
        }

        return <Image style={{height: 30, width: 30}} source={myicon} />;
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#ff6b49',
      showLabel: true,
      inactiveTintColor: 'black',
      style: {
        backgroundColor: 'grey',
      },
    },
    animationEnabled: false,
    swipeEnabled: false,
    initialRouteName: NavigationRoutes.Discovery,
  },
);

const goStack = createStackNavigator(
  {
    [NavigationRoutes.SplashScreen]: Splash,
    [NavigationRoutes.LoginScreen]: LoginScreen,
    [NavigationRoutes.RegisterScreen]: RegisterScreen,
    GoTabs: goTabs,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(goStack);
