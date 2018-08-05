import React, { Component } from 'react'
import { Text, View, VrButton } from 'react-360'
import Button from './Button'
import VacationView from './VacationView'
import { tally, findMax } from '../helpers'
import style from '../style'

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
    const { choiceValue } = this.state
    const { values, pushLast } = this.props
    await pushLast(choiceValue)
    await this.setState({
      choiceValue: 0,
      vacationId: findMax(tally(values))
    })
  }

  renderVacation () {
    const { vacationId } = this.state
    const { goHome } = this.props
    if (vacationId !== 0) {
      return (
        <VacationView id={vacationId} goHome={goHome} />
      )
    }
  }

  renderQuestion () {
    const { ask, choices, index } = this.props
    const { vacationId } = this.state

    if (vacationId === 0) {
      return (
        <View>
          <Text style={style.question} >{ask}</Text>
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
              <VrButton style={style.nextButton} onClick={this.onSubmit}>
                <Text>Submit</Text>
              </VrButton>
            ) : (
              <VrButton style={style.nextButton} onClick={this.onNext}>
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
