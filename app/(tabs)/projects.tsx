import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

const recentDesigns = [
  { id: '1', name: 'Untitled Design', image: 'https://via.placeholder.com/120x160/FFC0CB/000000?text=Design+1', time: '47 minutes ago' },
  { id: '2', name: 'Untitled Design', image: 'https://via.placeholder.com/120x160/FFC0CB/000000?text=Design+2', time: '47 minutes ago' },
  { id: '3', name: 'Untitled Design', image: 'https://via.placeholder.com/120x160/FFC0CB/000000?text=Design+3', time: '47 minutes ago' },
];

const folders = [
  { id: '1', name: 'Uploads', icon: 'file-upload' },
];

export default function ProjectsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF5E1' }}>
      {/* Header with background image */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80' }}
        style={{ height: 120, paddingHorizontal: 16, paddingTop: 36, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        imageStyle={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
      >
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Projects</Text>
        <TouchableOpacity>
          <MaterialIcons name="search" size={28} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={{ padding: 16 }}>
        {/* Filter Row */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
          <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#888', marginRight: 4 }}>Owner</Text>
            <MaterialIcons name="arrow-drop-down" size={20} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#888', marginRight: 4 }}>Category</Text>
            <MaterialIcons name="arrow-drop-down" size={20} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#888', marginRight: 4 }}>Date modified</Text>
            <MaterialIcons name="arrow-drop-down" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#e5e7eb', marginBottom: 12 }}>
          {['All', 'Folders', 'Designs', 'Images'].map((tab) => (
            <TouchableOpacity key={tab} style={{ paddingBottom: 12, marginRight: 24 }}>
              <Text style={{ fontWeight: '500', color: '#333' }}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Designs */}
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Recent designs</Text>
        <FlatList
          data={recentDesigns}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          style={{ marginBottom: 16 }}
          renderItem={({ item }) => (
            <View style={{ width: 120, marginRight: 12 }}>
              <ImageBackground
                source={{ uri: item.image }}
                style={{ height: 120, borderRadius: 12, overflow: 'hidden', marginBottom: 6 }}
                imageStyle={{ borderRadius: 12 }}
              />
              <Text style={{ fontWeight: '500' }}>{item.name}</Text>
              <Text style={{ fontSize: 12, color: '#888' }}>Whiteboard • {item.time}</Text>
            </View>
          )}
        />

        {/* Most relevant */}
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
          <Text style={{ color: '#888', fontWeight: '500', marginRight: 4 }}>Most relevant</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#888" />
        </TouchableOpacity>

        {/* Folders */}
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Folders</Text>
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          {folders.map((folder) => (
            <TouchableOpacity key={folder.id} style={{ alignItems: 'center', marginRight: 24 }}>
              <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 4 }}>
                <MaterialIcons name={folder.icon} size={28} color="#6a11cb" />
              </View>
              <Text style={{ fontWeight: '500', color: '#333' }}>{folder.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Designs (placeholder) */}
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Designs</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ backgroundColor: '#fff', borderRadius: 12, width: 120, height: 80, marginRight: 12 }} />
          <View style={{ backgroundColor: '#fff', borderRadius: 12, width: 120, height: 80 }} />
        </View>
      </View>

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
        }}
      >
        <MaterialIcons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}