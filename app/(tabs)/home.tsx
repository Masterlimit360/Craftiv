import RecentDesignCard from '@/components/RecentDesignCard';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Sample design template images from a design service
const designTemplates = {
  story: 'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  video: 'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  tshirt: 'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  social: 'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  photo: 'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  whiteboard: 'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
  doc: 'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png'
};

const categories = [
  { key: 'Your Story', icon: 'history', color: '#f44336', image: designTemplates.story },
  { key: 'Mobile Video', icon: 'videocam', color: '#e91e63', image: designTemplates.video },
  { key: 'T-Shirt', icon: 'checkroom', color: '#9c27b0', image: designTemplates.tshirt },
  { key: 'Social Media', icon: 'people', color: '#2196f3', image: designTemplates.social },
  { key: 'Photo Editor', icon: 'edit', color: '#4caf50', image: designTemplates.photo },
];

const recentDesigns = [
  { id: '1', name: 'Summer Campaign', image: designTemplates.story, time: '47 minutes ago' },
  { id: '2', name: 'Product Video', image: designTemplates.video, time: '2 hours ago' },
  { id: '3', name: 'Team T-Shirt', image: designTemplates.tshirt, time: '1 day ago' },
  { id: '4', name: 'Instagram Post', image: designTemplates.social, time: '2 days ago' },
  { id: '5', name: 'Wedding Photo', image: designTemplates.photo, time: '1 week ago' },
];

const emptyDesigns = Array.from({ length: 3 }).map((_, i) => ({
  id: `empty-${i}`,
  name: 'New Project',
  image: designTemplates.whiteboard,
  time: '',
}));

type TabItem = { key: string; icon: string; color: string; image: string };

const HomeScreen = () => {
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
          <TouchableOpacity onPress={() => router.push('/screens/profile')}>
            <MaterialIcons name="account-circle" size={24} color="white" />
          </TouchableOpacity>
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
          marginHorizontal: 8,
          borderRadius: 8,
          alignItems: 'center',
          paddingHorizontal: 8
        }}>
          <MaterialIcons name="search" size={20} color="grey" />
          <TextInput placeholder="Search your content" style={{ flex: 1, marginLeft: 8 }} />
        </View>
      </LinearGradient>

      <ScrollView style={{ flex: 1 }}>
        {/* Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: 12, paddingHorizontal: 16 }}>
          {categories.map(renderTab)}
        </ScrollView>

        {/* Recent Designs */}
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Recent Designs</Text>
          <FlatList
            data={[...recentDesigns, ...emptyDesigns]}
            renderItem={({ item }) => <RecentDesignCard item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Whiteboard */}
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Whiteboard</Text>
            <TouchableOpacity>
              <Text style={{ color: '#2563eb', fontWeight: 'bold' }}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 12 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <ImageBackground
                key={i}
                source={{ uri: designTemplates.whiteboard }}
                style={{ width: 120, height: 160, borderRadius: 12, marginRight: 12 }}
                imageStyle={{ borderRadius: 12 }}
              />
            ))}
          </ScrollView>

          {/* Your stories */}
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Your stories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
            {[1, 2, 3].map((i) => (
              <ImageBackground
                key={i}
                source={{ uri: designTemplates.story }}
                style={{ width: 120, height: 160, borderRadius: 12, marginRight: 12 }}
                imageStyle={{ borderRadius: 12 }}
              />
            ))}
          </ScrollView>

          {/* Docs */}
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Docs</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
            {[1, 2, 3].map((i) => (
              <ImageBackground
                key={i}
                source={{ uri: designTemplates.doc }}
                style={{ width: 120, height: 160, borderRadius: 12, marginRight: 12 }}
                imageStyle={{ borderRadius: 12 }}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

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

export default HomeScreen;