import React, { Component } from 'react'
import styles from '../style'
import { Text, View } from 'react-360'
import Button from './button'

class Home extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <View style={styles.greetingBox}>
        <Text>
          { this.props.vacation ? 'Take a Virtual Vacation' : 'back to work!!!' }
        </Text>
      </View>
    )
  }
}

export default Home