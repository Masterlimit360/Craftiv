import { MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const templates = [
  { id: '1', image: 'https://via.placeholder.com/120x160/bae6fd/000?text=New+1' },
  { id: '2', image: 'https://via.placeholder.com/120x160/ffd6e0/000?text=New+2' },
  { id: '3', image: 'https://via.placeholder.com/120x160/fff7ae/000?text=New+3' },
];

export default function CreateDesign() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF5E1', padding: 16 }}>
      {/* Search Bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 12, marginBottom: 16 }}>
        <MaterialIcons name="search" size={20} color="#888" />
        <TextInput placeholder="What would you love to create?" style={{ flex: 1, marginLeft: 8 }} />
        <TouchableOpacity>
          <MaterialIcons name="close" size={20} color="#888" />
        </TouchableOpacity>
      </View>
      {/* Filter Chips */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12 }}>
        {['For you', 'Social media', 'Videos', 'Photo editor'].map((label, idx) => (
          <TouchableOpacity key={label} style={{ backgroundColor: idx === 0 ? '#f3f4f6' : '#fff', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 6, marginRight: 8, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: idx === 0 ? '#000' : '#e11d48', fontWeight: '500' }}>{label}</Text>
            {idx > 0 && <MaterialIcons name="check-box" size={16} color="#e11d48" style={{ marginLeft: 4 }} />}
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 6, marginRight: 8, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontWeight: '500' }}>Custom size</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 6, marginRight: 8, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="cloud-upload" size={16} color="#000" style={{ marginRight: 4 }} />
          <Text style={{ color: '#000', fontWeight: '500' }}>Upload</Text>
        </TouchableOpacity>
      </View>
      {/* Create new */}
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Create new</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
        {templates.map((item) => (
          <Image key={item.id} source={{ uri: item.image }} style={{ width: 120, height: 160, borderRadius: 12, marginRight: 12 }} />
        ))}
      </ScrollView>
      {/* Templates for you */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Templates for you</Text>
        <TouchableOpacity>
          <Text style={{ color: '#2563eb', fontWeight: 'bold' }}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <Image source={{ uri: 'https://via.placeholder.com/120x160/000/fff?text=Template+A' }} style={{ width: 120, height: 160, borderRadius: 12, marginRight: 12 }} />
        <Image source={{ uri: 'https://via.placeholder.com/120x160/fff7ae/000?text=Template+B' }} style={{ width: 120, height: 160, borderRadius: 12, marginRight: 12 }} />
        <TouchableOpacity style={{ position: 'absolute', right: 24, bottom: 24, backgroundColor: '#2563eb', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 8 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>+ Start creating</Text>
        </TouchableOpacity>
      </View>
      {/* Create using your photos and videos */}
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Create using your photos and videos</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Image source={{ uri: 'https://via.placeholder.com/80x80/bae6fd/000?text=Photo1' }} style={{ width: 80, height: 80, borderRadius: 12, marginRight: 12, marginBottom: 12 }} />
        <Image source={{ uri: 'https://via.placeholder.com/80x80/ffd6e0/000?text=Photo2' }} style={{ width: 80, height: 80, borderRadius: 12, marginRight: 12, marginBottom: 12 }} />
        <Image source={{ uri: 'https://via.placeholder.com/80x80/fff7ae/000?text=Photo3' }} style={{ width: 80, height: 80, borderRadius: 12, marginRight: 12, marginBottom: 12 }} />
      </View>
      <TouchableOpacity style={{ alignItems: 'center', marginVertical: 16 }}>
        <Text style={{ color: '#2563eb', fontWeight: 'bold', fontSize: 16 }}>See all</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}