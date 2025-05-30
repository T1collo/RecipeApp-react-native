import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader: React.FC = () => {
  return (
    <SafeAreaView className='px-5'>
      <Text className="font-semibold text-gray-400">Hello John Doe</Text>
      <Text className="font-bold text-2xl text-black pt-3 pb-4">Check daily Recipes</Text>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-200 rounded-full px-4 py-2">
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          placeholder="Search a recipe..."
          placeholderTextColor="#888"
          className="ml-2 flex-1 text-base text-black"
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
