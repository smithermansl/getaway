import React from 'react'
import { AppRegistry, View } from 'react-360'
import Question from './components/Question'
import Home from './components/home'
import questions from './questions.json'
import style from './style'

export default class stackathon extends React.Component {
  constructor() {
    super()
    this.state = {
      currQuestion: {},
      index: 1,
      values: []
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

  render() {
    const { currQuestion } = this.state
    const { ask, choices } = currQuestion

    if (Object.keys(currQuestion).length) {
      return (
        <View style={style.panel}>
          <Question ask={ask} choices={choices} handleSubmit={this.handleSubmit} />
        </View>
      )
    } else {
      return (
          <Home handleEnter={this.handleEnter} />
      )
    }
  }
}

AppRegistry.registerComponent('stackathon', () => stackathon);
