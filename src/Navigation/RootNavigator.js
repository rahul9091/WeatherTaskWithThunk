import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import Messages from '../Screens/Messages';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Message" component={Messages} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}






//   const Tab = createBottomTabNavigator();

// const tabBarOptions = {
//     showLabel: false,
//     inactiveTintColor: '#2D3038',
//     activeTintColor: '#FFFFFF',
//     style: {
//       height: 50,
//       backgroundColor: '#1E1B26'
//     }
//   };

//   const screenOptions = (route, color) => {
//     let iconName;

//     switch (route.name) {
//       case 'Home':
//         iconName = 'home';
//         break;
//       case 'Messages':
//         iconName = 'bookmark-multiple-outline';
//         break;
//       default:
//         break;
//     }

//     return <Icons name={iconName} color={color} size={24} />;
//   };

//   const RootNavigator = () => {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator
//           initialRouteName='Home'
//           tabBarOptions={tabBarOptions}
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ color }) => screenOptions(route, color)
//           })}
//         >
//           <Tab.Screen name='Home' component={Home} />
//           <Tab.Screen name='Messages' component={Messages} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   };

export default RootNavigator;