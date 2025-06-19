import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function profile() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Your Username</Text>
          <Text style={styles.value}>martinafu12345</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Your name</Text>
          <Text style={styles.value}>Martina Afu</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Profile Photo</Text>
          <Image
            source={{ uri: 'https://img.icons8.com/ios/100/image.png' }}
            style={styles.profileImg}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.edit}>Add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>log out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 16, color: '#222' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 },
  label: { color: '#222', fontSize: 15 },
  value: { color: '#222', fontSize: 15, fontWeight: 'bold' },
  edit: { color: '#888', fontSize: 15 },
  profileImg: { width: 50, height: 50, marginTop: 8, borderRadius: 8, backgroundColor: '#eee' },
  logoutBtn: { alignSelf: 'center', marginTop: 40, backgroundColor: '#E6F2E2', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 40 },
  logoutText: { color: '#217A2C', fontWeight: 'bold', fontSize: 16 },
})