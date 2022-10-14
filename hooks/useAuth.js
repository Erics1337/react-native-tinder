import { View, Text } from 'react-native'
import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'
import * as Google from 'expo-google-app-auth'

import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithCredential,
	signOut,
} from 'firebase/auth'

import { auth } from '../firebase'

const AuthContext = createContext({})
const config = {
	androidClientId:
		'444431416975-qbtph9v7805ut6rpmi412a4ri11id08o.apps.googleusercontent.com',
	iosClientId:
		'444431416975-pqp6v01eh8o8j9l575kqi7ukbln1afvv.apps.googleusercontent.com',
	expoClientId:
		'444431416975-80s80egee22rkvrn3g83rboh84c2ps4n.apps.googleusercontent.com', //new
	scopes: ['profile', 'email'],
	permissions: ['public_profile', 'email', 'gender', 'location'],
}

export const AuthProvider = ({ children }) => {
	const [error, setError] = useState(null)
	const [user, setUser] = useState(null)
	const [loadingInitial, setLoadingInitial] = useState(true)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
			} else {
				setUser(null)
			}
			if (loadingInitial) setLoadingInitial(false)
		})
		return unsubscribe
	}, [])

	const signInWithGoogle = async () => {
		setLoading(true)
		console.log('signing in with google')
		await Google.logInAsync(config)
			.then(async (logInResult) => {
				if (logInResult.type === 'success') {
					// login ...
					const { idToken, accessToken } = logInResult
					const credential = GoogleAuthProvider.credential(
						idToken,
						accessToken
					)
					await signInWithCredential(auth, credential)
				}
				return Promise.reject()
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false))
	}

	const signOutUser = async () => {
		setLoading(true)
		try {
			await signOut(auth)
		} catch (e) {
			setError(e)
		} finally {
			setLoading(false)
		}
	}

	const memoedValue = useMemo(
		() => ({
			user,
			loading,
			error,
			signOutUser,
			signInWithGoogle,
		}),
		[user, loading, error]
	)

	return (
		<AuthContext.Provider value={memoedValue}>
			{!loadingInitial && children}
		</AuthContext.Provider>
	)
}

export default function useAuth() {
	return useContext(AuthContext)
}
