import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Sample template images from a design service
const templateImages = [
  'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png'
];

const inspiration = [
  { id: '1', image: 'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png', title: 'Summer Collection' },
  { id: '2', image: 'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png', title: 'New Templates' },
];

const templates = Array.from({ length: 8 }).map((_, i) => ({
  id: `template-${i}`,
  image: templateImages[i % templateImages.length],
  name: `Template ${i + 1}`
}));

export default function ExploreScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF5E1' }}>
      <ScrollView style={{ padding: 16 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#888' }}>Explore</Text>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <MaterialIcons name="menu" size={24} color="#888" />
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#222', fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>
          Explore more templates and designs for inspiration✨
        </Text>

        {/* Inspiration Banners */}
        {inspiration.map((item) => (
          <View key={item.id} style={{ marginBottom: 12 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: '100%', height: 120, borderRadius: 12 }}
              resizeMode="cover"
            />
            <Text style={{ marginTop: 4, fontWeight: '500' }}>{item.title}</Text>
          </View>
        ))}

        {/* Templates List */}
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 8 }}>Popular Templates</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {templates.map((item) => (
            <View key={item.id} style={{ width: '48%', marginBottom: 12 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: '100%', height: 150, borderRadius: 12 }}
                resizeMode="cover"
              />
              <Text style={{ marginTop: 4 }}>{item.name}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={{ alignItems: 'center', marginVertical: 16 }}>
          <Text style={{ color: '#2563eb', fontWeight: 'bold', fontSize: 16 }}>See more</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Sidebar Menu - Same as HomeScreen and ProjectsScreen */}
      <Modal
        animationType="slide"
        transparent
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.sidebar}>
            <Text style={styles.menuHeader}>Menu</Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push('/'); }}>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push('/(tabs)/projects'); }}>
              <Text style={styles.menuText}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push('/(tabs)/explore'); }}>
              <Text style={styles.menuText}>Templates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push('/(tabs)/settings'); }}>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  sidebar: {
    width: '50%',
    backgroundColor: '#fff',
    paddingTop: 48,
    paddingHorizontal: 16,
    height: '100%',
    elevation: 8,
  },
  menuHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 16,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 16,
  },
  menuText: {
    fontSize: 16,
  },
});