import React, { Component } from 'react'
import styles from '../style'
import { Text, VrButton } from 'react-360'

class Button extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    evt.preventDefault()
    console.log('render first question')
  }

  render () {
    const { text } = this.props
    return (
      <VrButton style={styles.enterButton} onClick={this.handleClick} >
        <Text style={styles.enter}>
          {text}
        </Text>
      </VrButton>
    )
  }
}

export default Button
