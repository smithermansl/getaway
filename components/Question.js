import React, { Component } from 'react'
import { Text, View, VrButton } from 'react-360'
import Button from './Button'
import VacationView from './VacationView'
import { tally, findMax } from '../helpers'

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choiceValue: 0,
      vacationId: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.onNext = this.onNext.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async handleSelect (value) {
    await this.setState({
      choiceValue: value
    })
  }

  async onNext () {
    const { handleSubmit } = this.props
    const { choiceValue } = this.state
    await handleSubmit(choiceValue)
    await this.setState({
      choiceValue: 0
    })
  }

  async onSubmit () {
    const { values } = this.props
    await this.setState({
      choiceValue: 0,
      vacationId: 5
    })
    console.log('state after submit func in Question', this.state)
  }

  renderVacation () {
    const { vacationId } = this.state
    if (vacationId !== 0) {
      return (
        <VacationView id={vacationId} />
      )
    }
  }

  renderQuestion () {
    const { ask, choices, index } = this.props
    const { vacationId } = this.state

    if (vacationId === 0) {
      return (
        <View>
          <Text>{ask}</Text>
          {
            choices && choices.map(choice => {
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
          {
            index ? (
              <VrButton onClick={this.onSubmit}>
                <Text>Submit</Text>
              </VrButton>
            ) : (
              <VrButton onClick={this.onNext}>
                <Text>Next</Text>
              </VrButton>
            )
          }
        </View>
      )
    }
  }

  render () {
    return (
      <View>
        {this.renderQuestion()}
        {this.renderVacation()}
      </View>
    )
  }
}

export default Question
