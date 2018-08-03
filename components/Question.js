import React, { Component } from 'react'
import { Text, View, VrButton } from 'react-360'
import Button from './button'
import style from '../style'

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choiceValue: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  async handleSelect (value) {
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
              choice.value === this.state.choiceValue ?
              (
                <Button
                  key={choice.value}
                  text={choice.label}
                  value={choice.value}
                  selected={true}
                  setQuestion={this.handleSelect}
                />
              ) :
              (
                <Button
                key={choice.value}
                text={choice.label}
                value={choice.value}
                selected={false}
                setQuestion={this.handleSelect}
              />
              )
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
