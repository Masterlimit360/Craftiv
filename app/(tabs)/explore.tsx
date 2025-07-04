import { MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
// Mock data
const trendingTemplates = [
  { id: '1', name: 'Instagram Post', thumbnail: 'https://via.placeholder.com/150/2563eb/ffffff?text=IG+Post' },
  { id: '2', name: 'YouTube Thumbnail', thumbnail: 'https://via.placeholder.com/150/2563eb/ffffff?text=YT+Thumb' },
  { id: '3', name: 'Business Card', thumbnail: 'https://via.placeholder.com/150/2563eb/ffffff?text=Biz+Card' },
  { id: '4', name: 'Presentation', thumbnail: 'https://via.placeholder.com/150/2563eb/ffffff?text=Slide' },
];


type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

const categories: { id: string; name: string; icon: MaterialIconName }[] = [
  { id: '1', name: 'Social Media', icon: 'share' },
  { id: '2', name: 'Marketing', icon: 'bar-chart' },
  { id: '3', name: 'Print', icon: 'print' },
  { id: '4', name: 'Personal', icon: 'person' },
  { id: '5', name: 'Education', icon: 'school' },
  { id: '6', name: 'Business', icon: 'business' },
];

const recommendedDesigns = [
  { id: '1', name: 'Summer Sale', type: 'Facebook Ad', likes: '1.2k' },
  { id: '2', name: 'Team Intro', type: 'Presentation', likes: '845' },
  { id: '3', name: 'Event Poster', type: 'Flyer', likes: '2.1k' },
];

export default function ExploreScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      {/* Search Bar */}
      <TouchableOpacity className="bg-white p-3 rounded-lg mb-4 flex-row items-center shadow-sm">
        <MaterialIcons name="search" size={20} color="#9ca3af" />
        <Text className="ml-2 text-gray-500">Search templates</Text>
      </TouchableOpacity>

      {/* Trending Templates */}
      <Text className="text-xl font-bold mb-3">Trending Templates</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        {trendingTemplates.map((template) => (
          <TouchableOpacity key={template.id} className="mr-4 w-40">
            <Image
              source={{ uri: template.thumbnail }}
              className="w-full h-48 rounded-lg mb-2"
            />
            <Text className="font-medium">{template.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Categories */}
      <Text className="text-xl font-bold mb-3">Categories</Text>
      <View className="flex-row flex-wrap justify-between mb-6">
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id} 
            className="w-[30%] bg-white p-4 rounded-lg items-center mb-4 shadow-sm"
          >
            <MaterialIcons name={category.icon} size={24} color="#2563eb" />
            <Text className="mt-2 text-center">{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recommended for You */}
      <Text className="text-xl font-bold mb-3">Recommended for You</Text>
      {recommendedDesigns.map((design) => (
        <TouchableOpacity 
          key={design.id} 
          className="bg-white p-4 rounded-lg mb-3 flex-row shadow-sm"
        >
          <View className="w-16 h-16 bg-gray-200 rounded-lg mr-3" />
          <View className="flex-1">
            <Text className="font-medium">{design.name}</Text>
            <Text className="text-gray-500 text-sm">{design.type}</Text>
          </View>
          <View className="flex-row items-center">
            <MaterialIcons name="favorite" size={16} color="#ef4444" />
            <Text className="ml-1 text-sm">{design.likes}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Popular Creators */}
      <Text className="text-xl font-bold mb-3 mt-2">Popular Creators</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-4">
        {[1, 2, 3, 4].map((item) => (
          <View key={item} className="items-center mr-4">
            <View className="w-16 h-16 bg-gray-300 rounded-full mb-2" />
            <Text className="font-medium">Creator {item}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}