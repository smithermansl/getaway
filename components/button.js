import React, { Component } from 'react'
import style from '../style'
import { Text, VrButton } from 'react-360'

class Button extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { setQuestion, value } = this.props
    setQuestion(value)
  }

  render () {
    const { text, selected } = this.props
    return (
      <VrButton
        style={ selected ? style.activeChoice : style.choiceButton }
        onClick={this.handleClick} >
        <Text style={style.enter}>{text}</Text>
      </VrButton>
    )
  }
}

export default Button
