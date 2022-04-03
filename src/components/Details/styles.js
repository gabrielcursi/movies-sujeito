import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    // width: '95%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  btnGoBack: {
    backgroundColor: '#e52343',
    padding: 10,

  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    padding: 8,
    fontSize: 28,
    fontWeight: 'bold'
  },
  sinopse: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  description: {
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10
  }
})

export default styles