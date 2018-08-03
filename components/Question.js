import React, { Component } from 'react'
import { Text, View, VrButton } from 'react-360'
import style from '../style'

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choiceValue: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  async handleSelect (evt, value) {
    console.log('how to change the button', evt.nativeEvent.inputEvent)
    console.log(evt.nativeEvent.inputEvent.button)
    console.log('state before: ', this.state)
    await this.setState({
      choiceValue: value
    })
    console.log('state after: ', this.state)
  }

  render () {
    // can destructure props when passed in?
    const { ask, choices, handleSubmit } = this.props
    const { choiceValue } = this.state
    return (
      <View>
        <Text>{ask}</Text>
        {
          choices.map(choice => {
            return (
              <VrButton
                key={choice.value}
                style={style.choiceButton}
                onClick={(evt) => this.handleSelect(evt, choice.value)}
              >
                <Text>{choice.label}</Text>
              </VrButton>
            )
          })
        }
        <VrButton onClick={() => handleSubmit(choiceValue)}>
          <Text>Next</Text>
        </VrButton>
      </View>
    )
  }
}

export default Question
