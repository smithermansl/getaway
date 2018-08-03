import React, { Component } from 'react'
import { Text, View, VrButton } from 'react-360'
import Button from './Button'

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choiceValue: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async handleSelect (value) {
    await this.setState({
      choiceValue: value
    })
  }

  async onSubmit () {
    const { handleSubmit } = this.props
    const { choiceValue } = this.state
    handleSubmit(choiceValue)
    await this.setState({
      choiceValue: 0
    })
  }

  render () {
    const { ask, choices } = this.props
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
        <VrButton onClick={this.onSubmit}>
          <Text>Next</Text>
        </VrButton>
      </View>
    )
  }
}

export default Question
