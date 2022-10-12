import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import StackNavigator from './StackNavigator'

export default function App() {

	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	)
}
