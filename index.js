import React from 'react'
import { Environment, asset, AppRegistry, View } from 'react-360'
import Question from './components/Question'
import Home from './components/Home'
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
    this.pushLast = this.pushLast.bind(this)
    this.goHome = this.goHome.bind(this)
  }

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

  async pushLast (value) {
    await this.setState((prevState) => ({
      values: [...prevState.values, value]
    }))
  }

  async goHome () {
    await this.setState({
      currQuestion: {},
      index: 1,
      values: []
    })
  }

  render() {
    const { currQuestion, index, values } = this.state
    const { ask, choices } = currQuestion

    if (Object.keys(currQuestion).length) {
      return (
        <View style={style.panel}>
          <Question
            ask={ask}
            choices={choices}
            index={(index === questions.length)}
            handleSubmit={this.handleSubmit}
            values={values}
            pushLast={this.pushLast}
            goHome={this.goHome} />
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
