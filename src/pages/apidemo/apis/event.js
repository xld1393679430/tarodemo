import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import Taro, { Events } from '@tarojs/taro'

const events = new Events()

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleBindEvent = () => {
    events.on('event-a', this.handleEvent)
  }

  handleTriggerEvent = () => {
    const triggerId = events.trigger('event-a', { content: 'hello taro' })
    console.log(triggerId, 'triggerId')
  }

  handleOffEvent = () => {
    events.off('event-a')
  }

  handleEvent = ({ content }) => {
    Taro.showModal({
      title: 'api:event',
      content
    })
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={this.handleBindEvent}>绑定事件</Button>
        <Button onClick={this.handleTriggerEvent}>触发事件</Button>
        <Button onClick={this.handleOffEvent}>解绑事件</Button>
      </View>
    )
  }
}

export default Index

