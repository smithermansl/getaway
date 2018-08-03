import React from 'react'
import styles from '../style'
import { View } from 'react-360'

class QuestionForm extends React {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    evt.preventDefault()
    console.log('event fired lol')
  }
  // const { handleSubmit, question } = this.props
  // const { choices } = question
  render () {
    return (
      <form>
        <label>Hello</label>
        <select value={5} onChange={this.handleChange} name="answer">
          <option value="">--</option>
          {/* {
            choices.map(choice => <option key={choice.value} value={choice.value}>{choice.label}</option>)
          } */}
        </select>
        <button type="submit">Next</button>
      </form>
    )
  }
}

export default QuestionForm
