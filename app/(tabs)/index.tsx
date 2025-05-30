import Categories from '@/components/Categories'
import CustomeHeader from '@/components/CustomeHeader'
import RecipeSectionScrool from '@/components/RecipeSectionScrool'
import React from 'react'
import { ScrollView, View } from 'react-native'

const index = () => {
  return (
   <ScrollView className='p-4'>
      <View>
        <CustomeHeader />
        <Categories />
        <RecipeSectionScrool />
      </View>
   </ScrollView>
  )
}

export default index