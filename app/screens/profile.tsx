import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF5E1', padding: 16 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 16 }}>
          <MaterialIcons name="arrow-back" size={24} color="#888" />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>My Profile</Text>
        <View style={{ width: 24 }} />
      </View>
      {/* Avatar */}
      <View style={{ alignItems: 'center', marginBottom: 12 }}>
        <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: '#1e1eaa', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
          <MaterialIcons name="person" size={32} color="#fff" />
        </View>
        <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 6, borderWidth: 1, borderColor: '#eee' }}>
          <Text style={{ color: '#222', fontWeight: '500' }}>Edit Photo</Text>
        </TouchableOpacity>
      </View>
      {/* Info */}
      <View style={{ backgroundColor: '#fff', borderRadius: 12, marginBottom: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}>
          <View>
            <Text style={{ color: '#888', fontSize: 12 }}>Name</Text>
            <Text style={{ fontWeight: '500' }}>Mina Torgah</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 6, borderWidth: 1, borderColor: '#eee' }}>
            <Text style={{ color: '#222', fontWeight: '500' }}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
          <View>
            <Text style={{ color: '#888', fontSize: 12 }}>Email address</Text>
            <Text style={{ fontWeight: '500' }}>torgahdelamina@gmail.com</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 6, borderWidth: 1, borderColor: '#eee' }}>
            <Text style={{ color: '#222', fontWeight: '500' }}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Logout */}
      <TouchableOpacity style={{ alignItems: 'center', borderWidth: 1, borderColor: '#f44336', borderRadius: 24, paddingVertical: 12, marginTop: 32 }}>
        <Text style={{ color: '#f44336', fontWeight: 'bold', fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}