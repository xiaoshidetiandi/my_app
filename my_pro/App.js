// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// 引入组件
import Login from './component/login';
import Register from './component/register';
import Index from './component/index';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={Index}
          options={{title: '主页'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: '用户登录'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: '用户注册'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
