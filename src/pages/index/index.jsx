import { Component, createRef } from "react";
import { connect } from "react-redux";
import { View, Text, Button, Swiper, SwiperItem } from "@tarojs/components";
import Taro, { eventCenter, getCurrentInstance } from "@tarojs/taro";
import { add, minus, asyncAdd } from "@/actions/counter";
import setTitle from "@/utils/title/set_title";

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
class Index extends Component {
  componentDidMount() {
    console.log("componentDidMount", this.el);
    const onReadyEventId = this.$instance.router.onReady;
    eventCenter.once(onReadyEventId, () => {
      console.log("eventCenter---onReady");
      Taro.createSelectorQuery()
        .select("#only")
        .boundingClientRect()
        .exec((res) => {
          console.log(1234, res);
        });
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {
    console.log("componentDidShow", this.el);
  }

  componentDidHide() {}

  onReady() {
    console.log("onReady", this.el);
    Taro.createSelectorQuery()
      .select("#only")
      .boundingClientRect()
      .exec((res) => {
        console.log("createSelectorQuery", res, 2222);
      });
  }

  enableShareAppMessage() {}

  $instance = getCurrentInstance();
  el = createRef();

  handleNavigateHome = () => {
    Taro.preload(this.fetchHomeData());
    Taro.navigateTo({
      url: "/pages/home/index?a=1",
    });
  };

  handleNavigateApiDemo = () => {
    Taro.navigateTo({
      url: "/pages/apidemo/index",
    });
  };

  fetchHomeData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { name: 123 } });
      }, 1000);
    });
  };

  handleChangeTitle = () => {
    setTitle("新的标题");
  };

  render() {
    const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`;

    return (
      <View className='index'>
        {/* <View dangerouslySetInnerHTML={{ __html: html }}></View> */}
        <Button className='add_btn' onClick={this.props.add}>
          +
        </Button>
        <Button className='dec_btn' onClick={this.props.dec}>
          -
        </Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>
          async
        </Button>
        <Button onClick={this.handleNavigateHome}>跳转到home页面</Button>
        <Button onClick={this.handleNavigateApiDemo}>跳转到ApiDemo页面</Button>
        <Button onClick={this.handleChangeTitle}>修改title</Button>
        <View ref={this.el} id='only'>
          <Text>{this.props.counter.num}</Text>
        </View>
        <View>
          <Text className='hello'>Hello, World</Text>
        </View>
        <Swiper className='swiper' interval={1000} indicatorColor='#999'>
          <SwiperItem>
            <View className='swiper-item-text'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper-item-text'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper-item-text'>3</View>
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}

export default Index;
