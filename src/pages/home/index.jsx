import { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { add, minus, asyncAdd } from "@/actions/counter";
import { createBrowserHistory } from 'history';


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
  async componentWillMount() {
    const preloadData = await Taro.getCurrentInstance().preloadData
    console.log(preloadData?.data, 'preloadData')
  }
  componentDidMount() {
    // 路由守卫
    console.log(this.$instance.router.params, 2222);
    const history = createBrowserHistory()
    console.log(history, 'window.history')
    this.unblock = history.block(tx => {
      console.log(2222)
      if(window.confirm('确认离开吗')) {
        this.unblock()
        tx.retry()
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {
    this.unblock && this.unblock()
  }

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
        <Button className='dec_btn' onClick={this.handleBack}>
        handleBack
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
