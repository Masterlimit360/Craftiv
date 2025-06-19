import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Settings() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Settings</Text>
      </View>

      {/* Account Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Details</Text>
        <TouchableOpacity onPress={() => router.push('/edit-profile')}>
          <Text style={styles.email}>martinaafoul@gmail.com</Text>
          <Text style={styles.subText}>You're signed in with your Google account</Text>
        </TouchableOpacity>
      </View>

      {/* Change to email sign-in */}
      <TouchableOpacity style={styles.row} onPress={() => router.push('/change-email')}>
        <Text style={styles.rowText}>Change to email sign -in</Text>
        <Ionicons name="chevron-forward" size={20} color="#222" />
      </TouchableOpacity>

      {/* Delete account */}
      <TouchableOpacity style={styles.row} onPress={() => router.push('/delete-account')}>
        <Text style={styles.deleteText}>Delete account</Text>
        <Ionicons name="chevron-forward" size={20} color="#E53935" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#222',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
    color: '#222',
  },
  email: {
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
  },
  subText: {
    fontSize: 13,
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rowText: {
    fontSize: 16,
    color: '#222',
  },
  deleteText: {
    fontSize: 16,
    color: '#E53935',
    fontWeight: 'bold',
  },
})