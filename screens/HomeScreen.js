import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'

const HomeScreen = () => {
	const tw = useTailwind()

	return (
		<View style={tw('flex-1 justify-center items-center')}>
			<Text>I am the homescreen</Text>
			<Button title='Go to chat' onPress={() => {}} />
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})
