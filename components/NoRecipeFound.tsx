import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface NoRecipeFoundProps {
  onBack?: () => void;  // Optional callback to go back or close the page
}

const NoRecipeFound: React.FC<NoRecipeFoundProps> = ({ onBack }) => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-5">
      <Ionicons name="warning-outline" size={80} color="#f87171" />
      <Text className="text-3xl font-bold text-red-500 mt-5 mb-2">
        No Recipe Found
      </Text>
      <Text className="text-center text-gray-600 mb-10">
        Sorry, we couldn't find the recipe you're looking for.
      </Text>

      {onBack && (
        <TouchableOpacity
          onPress={onBack}
          className="bg-red-500 px-6 py-3 rounded-full"
          activeOpacity={0.7}
        >
          <Text className="text-white text-lg font-semibold">Go Back</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NoRecipeFound;
