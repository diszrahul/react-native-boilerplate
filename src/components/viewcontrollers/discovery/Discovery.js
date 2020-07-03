/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:44
 * @modify date 2020-05-06 09:51:44
 * @desc [Discovery screen placeholder]
 */

/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

export default class Discovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromFetch: false,
      userData: [],
    };
  }
  componentDidMount() {
    this.setState({
      userData: this.props._userData.userData,
    });
  }

  getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('inside function');
        console.log(response.data);
        this.props.showUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentWillReceiveProps(nextProps) {
    debugger;
    this.setState({
      userData: nextProps._userData.userData,
    });
  }

  FlatListSeparator() {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  }

  goForRandomUser() {
    this.setState({
      fromFetch: true,
    });
  }

  render() {
    console.log('checkdata', this.props._userData);
    const {fromFetch, userData} = this.state;
    return (
      <View style={{flex: 1, flexDirection:'row'}}>
        <View style={{flex: 10}}>
              <Text>Discovery page</Text>
              <View style={{margin: 20}}>
                <TouchableOpacity
                  onPress={() => {
                    this.getData();
                  }}>
                  <Text>Press here</Text>
                </TouchableOpacity>
                <FlatList
                  data={userData}
                  renderItem={({item}) => (
                    <View
                      style={{
                        flex: 1,
                        marginBottom: 10,
                        backgroundColor: 'pink',
                        width: '100%',
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subView: {
    flex:1,
    backgroundColor:'#333',
    position: "absolute",
    right: 0,
    backgroundColor: "#FFFFFF",
    height:500,
  }
});
