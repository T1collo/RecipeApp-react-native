import { recipes } from '@/constants/recipes'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const RecipeSectionScrool = () => {
  return (
    <ScrollView>
    {recipes.map((item, key) => (
        <TouchableOpacity className='mb-5'>
          {/* Image */}
          <Image 
            source={{uri: item.imageUrl}}
            style={{ width: 355, height: 200 }}
            resizeMode="cover"
            className='rounded-lg'
            key={item.id}
          />
          {/* Tite */}
          <Text className='p-5 font-bold text-black text-3xl'>{item.mealName}</Text>

          <View className='flex-row items-center justify-between px-5'>
            {/* author */}
              <View className='flex-row items-center gap-3'>
                <Ionicons name='person-circle-outline' size={20}/>
                <Text className='text-purple-500 underline'>
                  {item.author}
                </Text>
              </View>

            {/* difficulty */}
            <View className='flex-row items-center gap-3'>
              <Ionicons name='checkmark-done-outline' size={20}/>
              <Text className='text-black font-semibold'>
                {item.difficulty}
              </Text>
            </View>
            
            {/* time in min */}
             <View className='flex-row items-center gap-3'>
              <Ionicons name='time-outline' size={20}/>
              <Text className='text-black font-semibold'>{item.prepTime}</Text>
            </View>
          </View>
        </TouchableOpacity>
    ))}
    </ScrollView>
  )
}

export default RecipeSectionScrool