import { StyleSheet, Text, View } from 'react-native'
import HeaderWithProfile from '../../components/HeaderWithProfile'

export default function Groceries() {
  return (
    <View style={styles.container}>
      <HeaderWithProfile title="Groceries" />
      {/* Your Groceries tab content goes here */}
      <Text style={styles.text}>Your grocery list will appear here.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F2E2',
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#217A2C',
  },
})