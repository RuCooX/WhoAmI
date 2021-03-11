import React, {useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import firebaseConfig from "../../Base";

export default function Login({navigation}: { navigation: any }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('SignUp')
    }

    const onLoginPress = () => {
        firebaseConfig
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                firebaseConfig.auth().onAuthStateChanged(user => {
                    // alert(user?.email)
                    navigation.navigate('Menu')
                })
            })
            .catch(error => {
                alert(error)
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View>
            <TextInput
                placeholder='E-mail'
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                onPress={() => onLoginPress()}>
                <Text>Log in</Text>
            </TouchableOpacity>
            <View>
                <Text>Don't have an account? <Text onPress={onFooterLinkPress}>Sign up</Text></Text>
            </View>
        </View>
    )
}