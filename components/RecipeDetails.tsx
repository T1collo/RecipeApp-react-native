import { Ingredient } from '@/constants/recipes';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import NoRecipeFound from './NoRecipeFound';

interface Recipe {
  id: string;
  imageUrl: string;
  mealName: string;
  author: string;
  difficulty: string;
  prepTime: string;
  description?: string;
  rating?: number;
  ingredients: Ingredient[];
  instructions: ProcessingInstruction[];
}

interface RecipeDetailsProps {
  recipe?: Recipe | null;
  onClose: () => void;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe, onClose }) => {
  if (!recipe) return <NoRecipeFound />; // handle no recipe

  return (
    <ScrollView className=" bg-gray-100 p-5">
          <View className="flex-row gap-5 justify-between items-center mb-5">
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close-circle-outline" size={30} color="black" />
            </TouchableOpacity>
            <View className="flex-row gap-5 items-center justify-center">
              <TouchableOpacity>
                <Ionicons name="save-outline" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="download-outline" size={30} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-10">
            <Text className="font-bold text-4xl text-black text-left mb-5 mt-5">{recipe.mealName}</Text>
            <Text className="text-lg text-gray-500 mb-5">{recipe.description}</Text>
            <Image
              source={{ uri: recipe.imageUrl }}
              style={{ width: '100%', height: 200, borderRadius: 0}}
              resizeMode="cover"
            />
            <View className="flex-row gap-5 mt-5 justify-between">
              <View className="bg-white rounded-lg drop-shadow-xl p-5 flex-1 items-center justify-center">
                <MaterialIcons name="sentiment-satisfied" size={25} />
                <Text className="mt-2">{recipe.difficulty}</Text>
              </View>
              <View className="bg-white rounded-lg drop-shadow-xl p-5 flex-1 items-center justify-center">
                <MaterialIcons name="star-outline" size={25} />
                <Text className="mt-2">{recipe.rating ?? 'N/A'}</Text>
              </View>
              <View className="bg-white rounded-lg drop-shadow-xl p-5 flex-1 items-center justify-center">
                <Ionicons name="time-outline" size={25} />
                <Text className="mt-2">{recipe.prepTime}</Text>
              </View>
            </View>
          </View>

          <View>
            <Text className="text-2xl font-semibold text-black mb-5">Ingredients</Text>
            {recipe.ingredients.map((ingredient: Ingredient, index: number) => (
              <View key={index}>
                <View className="flex-row justify-between items-center">
                  <Text className="font-semibold text-lg text-gray-400">
                    {ingredient.name}
                  </Text>
                  <Text className="font-semibold text-lg text-gray-400">
                    {ingredient.quantity}
                  </Text>
                </View>
                <View className="mt-2 mb-3 w-full bg-gray-300 border-gray-200 border" />
              </View>
            ))}
          </View>

         <View className="mt-10">
  <Text className="text-2xl font-semibold text-black mb-5">Instructions</Text>

  {recipe.instructions.map((instruction, index) => (
    <View
      key={index}
      className="flex-row items-start space-x-2 bg-white p-4 rounded-lg mb-4 shadow-sm"
    >
      <Text className="text-base text-gray-700 flex-1 leading-relaxed">
        {typeof instruction === 'string' ? instruction : instruction.step}
      </Text>
    </View>
  ))}
</View>



          
    </ScrollView>
  );
};

export default RecipeDetails;
