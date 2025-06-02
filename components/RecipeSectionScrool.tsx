import { recipes } from '@/constants/recipes'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import RecipeDetails from './RecipeDetails'

type Recipe = {
  id: string
  imageUrl: string
  mealName: string
  author: string
  difficulty: string
  prepTime: string
  description: string
}

const RecipeSectionScrool = () => {
  const backgroundColors = [
    '#FFE5E5', // light red
    '#FFEACC', // light orange
    '#FFF5CC', // light yellow
    '#E0F7E9', // light green
    '#CCF2F2', // light teal
    '#DDEEFF', // light blue
    '#E5E0FF', // light indigo
    '#F3E5F5', // light purple
    '#FFD6EB', // light pink
    '#F5F5F5'  // light gray
  ]

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)

  const openModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe)
    setModalVisible(true)
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {recipes.map((item, index) => {
          const bgColor = backgroundColors[index % backgroundColors.length]
          const isImageLeft = index % 2 === 0 // even index -> image left

          return (
            <TouchableOpacity
              key={item.id}
              style={{
                backgroundColor: bgColor,
                borderRadius: 10,
                marginBottom: 20,
                padding: 10,
                flexDirection: isImageLeft ? 'row' : 'row-reverse',
                alignItems: 'center'
              }}
              onPress={() => openModal(item)}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={{
                  width: '40%',
                  height: 150,
                  borderRadius: 10,
                  marginRight: isImageLeft ? 10 : 0,
                  marginLeft: isImageLeft ? 0 : 10
                }}
                resizeMode="cover"
              />

              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
                  {item.mealName}
                </Text>
                <Text style={{ marginVertical: 5 }}>{item.description}</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <MaterialIcons name="sentiment-satisfied" size={18} />
                    <Text style={{ color: '#8b5cf6', textDecorationLine: 'underline', fontSize: 12 }}>
                      {item.author}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <Ionicons name="checkmark-done-outline" size={18} color="gray" />
                    <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.difficulty}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <Ionicons name="time-outline" size={18} color="gray" />
                    <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.prepTime}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        {selectedRecipe && (
          <RecipeDetails
            recipe={selectedRecipe}
            onClose={() => setModalVisible(false)}
          />
        )}
      </Modal>
    </>
  )
}

export default RecipeSectionScrool
