import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HeaderWithProfile from '../../components/HeaderWithProfile'

export default function Add() {
  return (
    <View style={styles.container}>
      <HeaderWithProfile title="My Grocery List" />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add your first recipe</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F2E2',
  },
  addButton: {
    backgroundColor: '#217A2C',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
})