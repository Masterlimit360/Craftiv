import RecentDesignCard from '@/components/RecentDesignCard';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const categories = [
  { key: 'Your Story', icon: 'history', color: '#f44336' },
  { key: 'Mobile Video', icon: 'videocam', color: '#e91e63' },
  { key: 'T-Shirt', icon: 'checkroom', color: '#9c27b0' },
  { key: 'Social Media', icon: 'people', color: '#2196f3' },
  { key: 'Photo Editor', icon: 'edit', color: '#4caf50' },
];

const recentDesigns = [
  { id: '1', name: 'Untitled Design', image: 'https://via.placeholder.com/120x160/FFC0CB/000000?text=Design+1', time: '47 minutes ago' },
  { id: '2', name: 'Untitled Design', image: 'https://via.placeholder.com/120x160/FFC0CB/000000?text=Design+2', time: '47 minutes ago' },
  { id: '3', name: 'Untitled Design', image: 'https://via.placeholder.com/120x160/FFC0CB/000000?text=Design+3', time: '47 minutes ago' },
  { id: '4', name: 'Untitled Design', image: 'https://via.placeholder.com/120x160/FFC0CB/000000?text=Design+4', time: '47 minutes ago' },
  { id: '5', name: 'Untitled Design', image: 'https://via.placeholder.com/120x160/FFC0CB/000000?text=Design+5', time: '47 minutes ago' },
];

type TabItem = { key: string; icon: string; color: string; };
interface RecentItem {
  title: string;
}

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Your Story');
  const [menuVisible, setMenuVisible] = useState(false);

  const renderTab = (item: TabItem) => (
    <TouchableOpacity
      key={item.key}
      onPress={() => setActiveTab(item.key)}
      style={{ alignItems: 'center', marginHorizontal: 12 }}
    >
      <View style={{ backgroundColor: item.color, borderRadius: 30, padding: 10 }}>
        <MaterialIcons name={item.icon as any} size={24} color="white" />
      </View>
      <Text style={{ marginTop: 4, fontSize: 12 }}>{item.key}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF5E1' }}>
      {/* Radiant Header */}
      <LinearGradient
        colors={['#6a11cb', '#2575fc']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ padding: 16 }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <MaterialIcons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>What will you design today?</Text>
          <MaterialIcons name="account-circle" size={24} color="white" />
        </View>

        {/* Your Designs and Templates */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 12 }}>
          <TouchableOpacity style={{ backgroundColor: 'white', padding: 8, marginHorizontal: 4, borderRadius: 8 }}>
            <Text>Your Designs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'white', padding: 8, marginHorizontal: 4, borderRadius: 8 }}>
            <Text>Templates</Text>
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View style={{
  flexDirection: 'row',
  backgroundColor: 'white',
  marginHorizontal: 8, // reduced side margins to widen bar
  borderRadius: 8,
  alignItems: 'center',
  paddingHorizontal: 8
}}>
          <MaterialIcons name="search" size={20} color="grey" />
          <TextInput placeholder="Search your content" style={{ flex: 1, marginLeft: 8 }} />
        </View>
      </LinearGradient>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: 12, paddingHorizontal: 16 }}>
        {categories.map(renderTab)}
      </ScrollView>

      {/* Recent Designs */}
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Recent Designs</Text>
        <FlatList
          data={recentDesigns}
          renderItem={({ item }) => <RecentDesignCard item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Sidebar Menu */}
      <Modal
        animationType="slide"
        transparent
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.sidebar}>
            <Text style={styles.menuHeader}>Menu</Text>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Templates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
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
