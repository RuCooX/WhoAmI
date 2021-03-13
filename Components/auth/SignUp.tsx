import React, {useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'

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
                placeholder='name'
                value={name}
            />
            <TextInput
                placeholder='E-mail'
                value={email}
            />
            <TextInput
                secureTextEntry
                placeholder='Password'
                value={password}
            />
            <TextInput
                secureTextEntry
                placeholder='Confirm Password'
                value={confirmPassword}
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