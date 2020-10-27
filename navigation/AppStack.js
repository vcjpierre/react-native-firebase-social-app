import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import AddPostScreen from '../screens/AddPostScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#2e64e5',
    }}>
    <Tab.Screen
      name="Home"
      component={FeedStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="home-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={ChatScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="chatbox-ellipses-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppStack;

const FeedStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home" activeColor="#fff">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#2e64e5',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <FontAwesome5.Button
                name="plus"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => navigation.navigate('AddPost')}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          title: 'Add new post',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2e64e515',
            shadowColor: '#fff',
            elevation: 0,
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
