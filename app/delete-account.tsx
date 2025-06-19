import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function DeleteAccount() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delete Account</Text>
      </View>
      <Text style={styles.info}>
        Are you sure you want to delete your MixIt account? All your account information, recipes and photos will be deleted permanently.
      </Text>
      <TouchableOpacity style={styles.deleteBtn}>
        <Text style={styles.deleteText}>I want to delete my account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 16, color: '#222' },
  info: { fontSize: 15, color: '#222', marginBottom: 40 },
  deleteBtn: { backgroundColor: '#E53935', borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginTop: 10 },
  deleteText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
})