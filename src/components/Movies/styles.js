import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    backgroundColor: '#FFF',
    margin: 16,
    elevation: 2
  },
  title: {
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold'
  },
  capa: {
    height: 250,
    zIndex: 2
  },
  areaBtn: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9
  },
  btn: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5

  },
  btnText: {
    color: '#FFF',
    textAlign: 'center'
  }
})

export default styles