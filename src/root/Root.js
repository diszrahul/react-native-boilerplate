/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:13:36
 * @modify date 2020-04-16 13:13:36
 * @desc [Root file of the project]
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NavigationRoute from './NavigationRoutes.js';
import Functions from '../helpers/Functions';
import DeviceInfo from 'react-native-device-info';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      deviceId:'',
      deviceType:Functions.isIOS()?'ios':'android',
      version:1,
    }
  }

  showLoadingView() {
    if (this.props.shouldShowLoader) {
      return (
        <View style={styles.spinnerWrapperView}>
          <View style={styles.spinnerView}>
            <Text>Loading loading loading...........</Text>
          </View>
        </View>
      );
    }
  }

  getDeviceId(){
    DeviceInfo.getUniqueId().then(uniqueId => {
      this.setState({
        deviceId:uniqueId
      },function(){
        this.getTokenRegister();
      });
});
  }

  getVersion(){
    DeviceInfo.getVersion().then(version => {
      this.setState({
        version:version
      },function(){
        this.callVersionAPI(this.state.version);
      });
});
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <NavigationRoute />
        {this.showLoadingView()}
      </View>
    );
  }
}

export default Root;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
  },
  spinnerWrapperView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  spinnerView: {
    backgroundColor: '#333',
    padding: 50,
    borderRadius: 10,
  },
});
