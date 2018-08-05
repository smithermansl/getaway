import React, { Component } from 'react'
import { Environment, asset, NativeModules, View, Text, VrButton } from 'react-360'
import style from '../style'
import vacations from '../vacations'
const { AudioModule } = NativeModules

class VacationView extends Component {
  constructor(props) {
    super(props)
    this.resetHomeView = this.resetHomeView.bind(this)
  }

  resetHomeView () {
    const { goHome } = this.props
    goHome()
    Environment.setBackgroundImage(asset('images/airport.jpg'))
    AudioModule.stopEnvironmental()
  }

  render () {
    const { id } = this.props
    const vacation = vacations[(id - 1)]
    Environment.setBackgroundImage(asset(vacation.image))
    AudioModule.playEnvironmental({
      source: asset(vacation.audio),
      volume: 0.5,
      loop: true
    })

    return (
      <View>
        <Text style={style.home}>Welcome to {vacation.title}</Text>
        <VrButton style={style.nextButton} onClick={this.resetHomeView}>
          <Text>Keep Traveling</Text>
        </VrButton>
      </View>
    )
  }
}

export default VacationView
