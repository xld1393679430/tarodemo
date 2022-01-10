import { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/taro";
import { add, minus, asyncAdd } from "@/actions/counter";

import "./index.less";

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
  })
)
class Home extends Component {
  componentDidMount() {
    console.log(this.$instance.router.params, 2222);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  $instance = getCurrentInstance();

  render() {
    return (
      <View className='home'>
        <Button className='add_btn' onClick={this.props.add}>
          +
        </Button>
        <Button className='dec_btn' onClick={this.props.dec}>
          -
        </Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    );
  }
}

export default Home;
