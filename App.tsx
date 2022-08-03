import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ButtonTab from './tabs/ButtonTab'
import ColorTab from './tabs/ColorTab'
import FormatterTab from './tabs/FormatterTab'
import IconTab from './tabs/IconTab'
import InputTab from './tabs/InputTab'
import SpacingTab from './tabs/SpacingTab'
import TextTab from './tabs/TextTab'

const Tab = createBottomTabNavigator()

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const Icon = ({name}: {name: string}) => (
              <Ionicons name={name} size={size} color={color} />
            )

            switch (route.name) {
              case 'Text':
                return <Icon name={'text'} />
              case 'Button':
                return <Icon name={'grid'} />
              case 'Input':
                return <Icon name={'tablet-landscape-outline'} />
              case 'Icon':
                return <Icon name={'logo-ionic'} />
              case 'Color':
                return <Icon name={'color-palette'} />
              case 'Formatter':
                return <Icon name={'code'} />
              case 'Spacing':
                return <Icon name={'filter'} />
              default:
                return <Icon name={'build'} />
            }
          },
        })}>
        <Tab.Screen name="Text" component={TextTab} />
        <Tab.Screen name="Button" component={ButtonTab} />
        <Tab.Screen name="Input" component={InputTab} />
        <Tab.Screen name="Icon" component={IconTab} />
        <Tab.Screen name="Color" component={ColorTab} />
        <Tab.Screen name="Spacing" component={SpacingTab} />
        <Tab.Screen name="Formatter" component={FormatterTab} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
