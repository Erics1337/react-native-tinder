import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
	const navigation = useNavigation()
	return (
		<View style={tw`flex-1 justify-center items-center`}>
			<Text>I am the homescreen</Text>
			<Button title='Go to chat' onPress={() => navigation.navigate('Chat')} />
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})
