import React, {useState} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'

export default function SignUp({navigation}: { navigation: any }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
    }

    return (
        <View>
            <TextInput
                placeholder='Full Name'
                value={name}
                autoCapitalize="none"
            />
            <TextInput
                placeholder='E-mail'
                value={email}
                autoCapitalize="none"
            />
            <TextInput
                secureTextEntry
                placeholder='Password'
                value={password}
                autoCapitalize="none"
            />
            <TextInput
                secureTextEntry
                placeholder='Confirm Password'
                value={confirmPassword}
                autoCapitalize="none"
            />
            <TouchableOpacity
                onPress={() => onRegisterPress()}>
                <Text>Create account</Text>
            </TouchableOpacity>
            <View>
                <Text>Already got an account? <Text onPress={onFooterLinkPress}>Log in</Text></Text>
            </View>
        </View>
    )
}