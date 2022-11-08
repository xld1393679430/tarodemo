import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

class Index extends Component {
  componentDidMount() {
    const taroEnv = Taro.getEnv();
    console.log(taroEnv, 'taroEnv----')
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>component</Text>
      </View>
    );
  }
}

export default Index;
