import React from 'react'
import { AppRegistry, Text, View, } from 'react-360'
import Home from './components/home'
import Question from './components/Question'

const data = [{
  "question": "What song best fits your current mood?",
  "choices": [{
    "label": "Material World - Madonna",
    "value": 1
  }, {
    "label": "Ain't No Mountain High Enough - Marvin Gaye & Tammy Terrell",
    "value": "2"
  }, {
    "label": "Up From The South - The Budos Band",
    "value": 3
  }, {
    "label": "Ain't No Sunshine - Bill Withers",
    "value": 5
  }]
},
{
  "question": "Are you a turd?",
  "choices": [{
    "label": "Material World - Madonna",
    "value": 1
  }, {
    "label": "Ain't No Mountain High Enough - Marvin Gaye & Tammy Terrell",
    "value": "2"
  }, {
    "label": "Up From The South - The Budos Band",
    "value": 3
  }, {
    "label": "Ain't No Sunshine - Bill Withers",
    "value": 5
  }]
}]

export default class stackathon extends React.Component {
  constructor() {
    super()
    this.state = {
      currQuestion: data[0],
      index: 1,
      values: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (value) {
    this.setState((prevState) => ({
      index: prevState.index + 1,
      currQuestion: data[prevState.index],
      values: [...prevState.values, value]
    }))
    console.log('state after click', this.state)
  }

  render() {
    const { question, choices } = this.state.currQuestion
    return (
      <View >
        <Question question={question} choices={choices} handleSubmit={this.handleSubmit} />
      </View>
    )
  }
}

AppRegistry.registerComponent('stackathon', () => stackathon);
