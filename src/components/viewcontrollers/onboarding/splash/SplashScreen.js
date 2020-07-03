/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-27 19:11:48
 * @modify date 2020-04-27 19:11:48
 * @desc [This is the main Splash Screen]
 */

/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Functions from '../../../../helpers/Functions';
import {LoginState} from '../../../../constants/Constants'

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.showLoader(false)
    this.checkLoginState()
}

async checkLoginState() {
  //Get current login state
  const state = await Functions.getLoginState();

  //Check the the user is logged in or not
  if (state == LoginState.login) {

    // User is logged in - send him to dashboard
    this.props.navigation.navigate('GoTabs')
  }else{

    // User is not logged in
    this.props.navigation.navigate('LoginScreen')
  }
}


  render() {
    return (
      <View style={styles.container}>
        <Text>Splash screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
