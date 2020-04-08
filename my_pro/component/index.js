import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// 引入3个组件
// 分类
import Classify from './index/classify';
// 我的
import Home from './index/home';
// 推荐
import Recommend from './index/recommend';
const Tab = createBottomTabNavigator();
// 屏幕配饰
const rpx = (dp) => {
  return (Dimensions.get('window').width / 750) * dp;
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  doLogin = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="分类" component={Classify} />
          <Tab.Screen name="推荐" component={Recommend} />
          <Tab.Screen
            name="我的"
            component={Home}
            initialParams={{doLogin: this.doLogin}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
