import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#6a5acd',
            headerShown: false,
            tabBarShowLabel: false,
            
        }}
    >
    <Tabs.Screen 
         name='index'
            options={{
                title: 'Home',
                tabBarIcon:({color}) => <Ionicons name="home-outline" size={30} color={color}/>  
            }}
    ></Tabs.Screen>

    <Tabs.Screen
        name='add-recipe'
        options={{
            title: 'Favourite',
            tabBarIcon: ({color,size}) => <Ionicons name='add-circle-outline' size={30} color={color} />
        }}
    ></Tabs.Screen>

    <Tabs.Screen
        name='saved'
        options={{
            title: 'New Recipes',
            tabBarIcon: ({color,size}) => <Ionicons name='bookmark-outline' size={30} color={color} />
        }}
    ></Tabs.Screen>

    <Tabs.Screen
        name='profile'
        options={{
            title: 'Profile',
            tabBarIcon: ({color,size}) => <Ionicons name='person-outline' size={30} color={color} />
        }}
    ></Tabs.Screen>
    </Tabs>
  )
}

export default TabsLayout