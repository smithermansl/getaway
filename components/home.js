import React from 'react'
import style from '../style'
import { Text, View, VrButton } from 'react-360'
// import Button from './button'

const Home = ({ handleEnter }) => {
    return (
      <View style={style.panel}>
        <Text>Find Your Ideal Virtual Vacation</Text>
        <VrButton style={style.enterButton} onClick={handleEnter}>
          <Text>Take the Quiz</Text>
        </VrButton>
      </View>
    )
}

export default Home
