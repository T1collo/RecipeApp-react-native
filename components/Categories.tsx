import { categories } from '@/constants/categories'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const selectCategory = (category: string) => {
    setSelectedCategory(category)
    console.log('category selected:', category)
  }

  return (
    <View className='mb-5'>
      <Text className='font-bold text-xl mb-2'>Categories</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        className='flex-row'>
        {categories.map((item) => {
          const isSelected = item.category === selectedCategory

          return (
            <TouchableOpacity 
              key={item.category}
              className={`border rounded-full p-2 mr-2 flex-row gap-2 items-center
                ${isSelected ? 'border-purple-600' : 'bg-white border-gray-300'}`}
              onPress={() => selectCategory(item.category)}
            >
              <Ionicons 
                name={item.iconName} 
                size={20} 
                color={isSelected ? '#6a5acd' : '#6a5acd'} 
              />
              <Text className={`font-semibold ${isSelected ? '' : 'text-black'}`}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Categories
