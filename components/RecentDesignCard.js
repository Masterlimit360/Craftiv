import { ImageBackground, Text, View } from 'react-native';

export default function RecentDesignCard({ item }) {
  return (
    <View style={{ width: 120, marginRight: 12 }}>
      <ImageBackground
        source={{ uri: item.image }}
        style={{ height: 120, borderRadius: 12, overflow: 'hidden', marginBottom: 6 }}
        imageStyle={{ borderRadius: 12 }}
      />
      <Text style={{ fontWeight: '500' }}>{item.name}</Text>
      <Text style={{ fontSize: 12, color: '#888' }}>Whiteboard • {item.time}</Text>
    </View>
  );
}
