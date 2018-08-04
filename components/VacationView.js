import React, { Component } from 'react'
import { Environment, asset, NativeModules, View, Text } from 'react-360'
import style from '../style'
import vacations from '../vacations'
const { AudioModule } = NativeModules

// find vacation in array with id that matches id prop, then set corresponding image to Environment

const VacationView = ({ id }) => {
  Environment.setBackgroundImage(asset(vacations[id - 1].image))
  return (
    <View>
      <Text>This is your vacation!</Text>
    </View>
  )
}

export default VacationView
