import React from 'react'
import { AppRegistry, Text, View, VrButton } from 'react-360'
import Home from './components/home'
import { Match, MemoryRouter as Router } from 'react-router'

export default class stackathon extends React.Component {
  constructor() {
    super()
    this.state = {
      vacation : true
    }
  }

  render() {
    return (
      <View >
        <VrButton onClick={e => this.setState({vacation : !this.state.vacation})} >
            <Text >CLick Me</Text>
          </VrButton>
                <Home vacation={this.state.vacation}/>
      </View>

    )
  }
}

AppRegistry.registerComponent('stackathon', () => stackathon);
