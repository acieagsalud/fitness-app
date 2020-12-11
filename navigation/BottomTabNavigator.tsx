import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import WorkoutTracker from '../screens/WorkoutTracker';
import ProgressTracker from '../screens/ProgressTracker';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Workouts"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Workouts"
        component={WorkoutTrackerNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Progress"
        component={ProgressTrackerNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function WorkoutTrackerNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Workouts"
        component={WorkoutTracker}
        options={{ headerTitle: 'Workout Tracker' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function ProgressTrackerNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Progress"
        component={ProgressTracker}
        options={{ headerTitle: 'Progress Tracker' }}
      />
    </TabTwoStack.Navigator>
  );
}
