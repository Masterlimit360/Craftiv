import RecentDesignCard from '@/components/RecentDesignCard';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Real design template images
const designImages = {
  headerBg: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  designs: [
    'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
    'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
    'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
    'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
    'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png'
  ],
  thumbnails: [
    'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
    'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png',
    'https://cdn.dribbble.com/userupload/12747785/file/original-8c9b0c0a9f5e5e5e5e5e5e5e5e5e5e5.png'
  ]
};

const recentDesigns = [
  { id: '1', name: 'Summer Campaign', image: designImages.designs[0], time: '47 minutes ago' },
  { id: '2', name: 'Product Launch', image: designImages.designs[1], time: '2 hours ago' },
  { id: '3', name: 'Social Media Pack', image: designImages.designs[2], time: '1 day ago' },
];

const emptyDesigns = Array.from({ length: 5 }).map((_, i) => ({
  id: `empty-${i}`,
  name: 'New Project',
  image: designImages.designs[i % designImages.designs.length],
  time: '',
}));

const folders = [
  { id: '1', name: 'Uploads', icon: 'file-upload' },
  { id: '2', name: 'Templates', icon: 'collections' },
  { id: '3', name: 'Shared', icon: 'folder-shared' },
];

export default function ProjectsScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF5E1' }}>
      {/* Header with background image */}
      <ImageBackground
        source={{ uri: designImages.headerBg }}
        style={{ 
          height: 160, 
          paddingHorizontal: 16, 
          paddingTop: 48,
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}
        imageStyle={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <MaterialIcons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={{ 
            color: '#fff', 
            fontSize: 24, 
            fontWeight: 'bold',
            marginLeft: 16,
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 3
          }}>
            My Projects
          </Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="search" size={28} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          {/* Filter Row */}
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            marginBottom: 16,
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 8
          }}>
            {['Owner', 'Category', 'Date'].map((filter) => (
              <TouchableOpacity 
                key={filter}
                style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center',
                  paddingHorizontal: 8
                }}
              >
                <Text style={{ color: '#6a11cb', marginRight: 4, fontWeight: '500' }}>{filter}</Text>
                <MaterialIcons name="arrow-drop-down" size={20} color="#6a11cb" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Tabs */}
          <View style={{ 
            flexDirection: 'row', 
            borderBottomWidth: 1, 
            borderColor: '#e5e7eb', 
            marginBottom: 16 
          }}>
            {['All', 'Folders', 'Designs', 'Images'].map((tab) => (
              <TouchableOpacity 
                key={tab} 
                style={{ 
                  paddingBottom: 12, 
                  marginRight: 24,
                  borderBottomWidth: 2,
                  borderBottomColor: tab === 'All' ? '#6a11cb' : 'transparent'
                }}
              >
                <Text style={{ 
                  fontWeight: tab === 'All' ? 'bold' : '500', 
                  color: tab === 'All' ? '#6a11cb' : '#333' 
                }}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Recent Designs */}
          <View style={{ marginBottom: 24 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Recent designs</Text>
              <TouchableOpacity>
                <Text style={{ color: '#6a11cb', fontWeight: '500' }}>View all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={[...recentDesigns, ...emptyDesigns]}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <RecentDesignCard item={item} />}
              contentContainerStyle={{ paddingBottom: 8 }}
            />
          </View>

          {/* Folders */}
          <View style={{ marginBottom: 24 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 12 }}>Folders</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {folders.map((folder) => (
                <TouchableOpacity 
                  key={folder.id} 
                  style={{ 
                    width: '30%',
                    alignItems: 'center',
                    marginBottom: 16,
                    marginRight: '3%'
                  }}
                >
                  <View style={{ 
                    backgroundColor: '#fff', 
                    borderRadius: 12, 
                    width: 80, 
                    height: 80,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 8,
                    elevation: 2
                  }}>
                    <MaterialIcons name={folder.icon} size={32} color="#6a11cb" />
                  </View>
                  <Text style={{ fontWeight: '500', color: '#333' }}>{folder.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* All Designs */}
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>All Designs</Text>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#888', fontWeight: '500', marginRight: 4 }}>Sort by</Text>
                <MaterialIcons name="arrow-drop-down" size={20} color="#888" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {designImages.thumbnails.map((image, index) => (
                <ImageBackground
                  key={`design-${index}`}
                  source={{ uri: image }}
                  style={{ 
                    width: '48%', 
                    height: 160, 
                    borderRadius: 12, 
                    marginBottom: 16,
                    overflow: 'hidden'
                  }}
                  imageStyle={{ borderRadius: 12 }}
                >
                  <View style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    backgroundColor: 'rgba(0,0,0,0.5)', 
                    padding: 8 
                  }}>
                    <Text style={{ color: '#fff', fontWeight: '500' }}>Design {index + 1}</Text>
                  </View>
                </ImageBackground>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          backgroundColor: '#6a11cb',
          borderRadius: 28,
          width: 56,
          height: 56,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
        onPress={() => router.push("/screens/CreateDesign")}
      >
        <MaterialIcons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      {/* Sidebar Menu - Same as HomeScreen */}
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