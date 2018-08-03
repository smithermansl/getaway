import React from 'react'
import { AppRegistry, View } from 'react-360'
import Question from './components/Question'
import Home from './components/Home'
import questions from './questions.json'
import style from './style'
import { tally, findMax } from './helpers'

export default class stackathon extends React.Component {
  constructor() {
    super()
    this.state = {
      currQuestion: {},
      index: 1,
      values: [],
      vacationId: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  // sets the current question on state to the first object in the array
  handleEnter () {
    this.setState({
      currQuestion: questions[0]
    })
  }

  async handleSubmit (value) {
    await this.setState((prevState) => ({
      index: prevState.index + 1,
      currQuestion: questions[prevState.index],
      values: [...prevState.values, value]
    }))
  }

  async setVacation () {
    const { values } = this.state,
    occurrences = tally(values),
    mostFrequent = findMax(occurrences)
    await this.setState({
      vacationId: mostFrequent
    })
  }

  render() {
    const { currQuestion, vacationId } = this.state
    const { ask, choices } = currQuestion

    if (Object.keys(currQuestion).length) {
      return (
        <View style={style.panel}>
          <Question ask={ask} choices={choices} handleSubmit={this.handleSubmit} />
        </View>
      )
    } else if (vacationId !== 0) {
      return (
        <VacationView id={vacationId} />
      )
    } else {
      return (
          <Home handleEnter={this.handleEnter} />
      )
    }
  }
}

AppRegistry.registerComponent('stackathon', () => stackathon);
