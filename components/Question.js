import React, { Component } from 'react'
import { Text, View, VrButton } from 'react-360'
// import style from '../style'

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choiceValue: 0
    }
  }

  render () {
    const { ask, choices, handleSubmit } = this.props
    const { choiceValue } = this.state
    return (
      <View>
        <Text>{ask}</Text>
        {
          choices.map(choice => {
            return (
              <VrButton key={choice.value}>
                <Text>{choice.label}</Text>
              </VrButton>
            )
          })
        }
        <VrButton onClick={() => handleSubmit(5)}>
          <Text>Next</Text>
        </VrButton>
      </View>
    )
  }
}

export default Question
