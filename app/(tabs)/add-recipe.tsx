import React from 'react';
import { Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const AddRecipe = () => {

   const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
            console.log('Clicked');

  }
  return (
   <SafeAreaView>
     <View>
      <Button title='Show toast' onPress={
        showToast
      }/>
    </View>
   </SafeAreaView>
  )
}

export default AddRecipe