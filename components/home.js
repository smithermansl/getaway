import React from 'react'
import style from '../style'
import { Text, View, VrButton } from 'react-360'
// import Button from './button'

const Home = ({ handleEnter }) => {
    return (
      <View style={style.panel}>
        <Text style={style.home}>Find Your Virtual Vacation</Text>
        <VrButton style={style.nextButton} onClick={handleEnter}>
          <Text style={style.nextButtonText}>Take the Quiz</Text>
        </VrButton>
      </View>
    )
}

export default Home
