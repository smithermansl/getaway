import { StyleSheet } from 'react-360'

const style = StyleSheet.create({
  panel: {
    width: 1000,
    height: 500,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    layoutOrigin: [0, 0],
    transform: [{translate: [0, 0, -3]}]
  },
  home: {
    fontSize: 36,
    fontWeight: '500'
  },
  homeButton: {
    padding: 15,
    backgroundColor: '#DCF1F7',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 2
  },
  homeButtonText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#5D5F5B'
  },
  question: {
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center'
  },
  choiceButton: {
    width: 400,
    backgroundColor: '#DCF1F7',
    alignItems: 'center',
    padding: 10,
    margin: 15,
    borderRadius: 2,
    alignSelf: 'center'
  },
  choiceText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#5D5F5B'
  },
  activeChoice: {
    width: 400,
    backgroundColor: '#B5E8ED',
    borderRadius: 2,
    alignItems: 'center',
    padding: 10,
    margin: 10,
    alignSelf: 'center'
  },
  activeChoiceText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#2E2F2D'
  },
  nextButton: {
    width: 200,
    padding: 15,
    backgroundColor: '#5D5F5B',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 2,
    alignSelf: 'center'
  },
  nextText: {
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center'
  }
});

export default style
