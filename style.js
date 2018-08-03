import { StyleSheet } from 'react-360'

const style = StyleSheet.create({
  panel: {
    width: 600,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterButton: {
    width: 150,
    height: 50,
    padding: 10,
    backgroundColor: '#000000',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    marginTop: 20
  },
  choiceButton: {
    height: 40,
    backgroundColor: '#000000',
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  },
  activeChoice: {
    height: 40,
    backgroundColor: '#3d3d5c',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  }
});

export default style
