import { StyleSheet } from 'react-360'

const style = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 600,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  greeting: {
    fontSize: 30,
  },
  enterButton: {
    width: 150,
    height: 50,
    padding: 10,
    backgroundColor: '#000000',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center'
  },
  enter: {
    fontSize: 20,
    color: '#FFFFFF'
  }
});

export default style
