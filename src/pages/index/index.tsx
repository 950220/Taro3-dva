import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  UNSAFE_componentWillMount () { }

  UNSAFE_componentDidMount () { }

  UNSAFE_componentWillUnmount () { }

  UNSAFE_componentDidShow () { }

  UNSAFE_componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
