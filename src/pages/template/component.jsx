import { Component } from 'react'
import { View, Text } from '@tarojs/components'

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>component</Text>
      </View>
    )
  }
}

export default Index

