import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log('props:', props.route.params.doLogin);
    this.state = {};
  }
  _doLohin = () => {
    // console.log(this.props.route.params.doLogin)
    // this.props.route.params.doLogin();
    this.props.route.params.doLogin()
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={this._doLohin} title="跳转登录" />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
