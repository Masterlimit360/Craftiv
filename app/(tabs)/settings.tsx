import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#FFF5E1' }}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: insets.bottom + 60, // tab bar height + safe area
      }}
    >
      {/* User Card */}
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        marginBottom: 24,
        elevation: 2,
      }}>
        <MaterialIcons name="account-circle" size={48} color="#6a11cb" />
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 8 }}>Mina Torgah</Text>
        <Text style={{ color: '#888', marginBottom: 8 }}>torgahmina@gmail.com</Text>
        <TouchableOpacity style={{ backgroundColor: '#6a11cb', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 6 }}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Appearance */}
      <Text style={{ color: '#888', fontWeight: 'bold', marginBottom: 8 }}>Appearance</Text>
      <View style={{ backgroundColor: '#fff', borderRadius: 12, marginBottom: 16 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name="dark-mode" size={24} color="#6a11cb" />
            <Text style={{ marginLeft: 12, fontWeight: '500' }}>Dark Mode</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </TouchableOpacity>
      </View>

      {/* Account */}
      <Text style={{ color: '#888', fontWeight: 'bold', marginBottom: 8 }}>Account</Text>
      <View style={{ backgroundColor: '#fff', borderRadius: 12, marginBottom: 16 }}>
        {[
          { icon: 'person', label: 'Profile' },
          { icon: 'subscriptions', label: 'Subscription' },
          { icon: 'cloud', label: 'Storage' },
        ].map((item) => (
          <TouchableOpacity key={item.label} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottomWidth: item.label !== 'Storage' ? 1 : 0, borderColor: '#eee' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name={item.icon} size={24} color="#6a11cb" />
              <Text style={{ marginLeft: 12, fontWeight: '500' }}>{item.label}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#888" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Preferences */}
      <Text style={{ color: '#888', fontWeight: 'bold', marginBottom: 8 }}>Preferences</Text>
      <View style={{ backgroundColor: '#fff', borderRadius: 12, marginBottom: 16 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name="notifications" size={24} color="#6a11cb" />
            <Text style={{ marginLeft: 12, fontWeight: '500' }}>Notification</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name="save" size={24} color="#6a11cb" />
            <Text style={{ marginLeft: 12, fontWeight: '500' }}>Auto Save</Text>
          </View>
          <Switch value={autoSave} onValueChange={setAutoSave} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name="cloud-upload" size={24} color="#6a11cb" />
            <Text style={{ marginLeft: 12, fontWeight: '500' }}>Export Quality</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Support */}
      <Text style={{ color: '#888', fontWeight: 'bold', marginBottom: 8 }}>Support</Text>
      <View style={{ backgroundColor: '#fff', borderRadius: 12, marginBottom: 16 }}>
        {[
          { icon: 'cloud-upload', label: 'Export Quality' },
          { icon: 'feedback', label: 'Send Feedback' },
          { icon: 'info', label: 'About Craftiv' },
        ].map((item, index) => (
          <TouchableOpacity
            key={item.label}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 16,
              borderBottomWidth: index !== 2 ? 1 : 0,
              borderColor: '#eee'
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name={item.icon} size={24} color="#6a11cb" />
              <Text style={{ marginLeft: 12, fontWeight: '500' }}>{item.label}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#888" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Sign out */}
      <TouchableOpacity style={{ alignItems: 'center', marginTop: 8 }}>
        <Text style={{ color: '#f44336', fontWeight: 'bold' }}>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
