import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.less";
import {
  // ApiEnv,
  ApiEvent,
} from './apis'


class Apidemo extends Component {
  componentWillReceiveProps() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='apidemo'>
        <View>
          <Text>Api Demo</Text>
        </View>
        <ApiEvent />
      </View>
    );
  }
}

export default Apidemo;
