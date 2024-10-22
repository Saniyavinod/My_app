import { SafeAreaView, View ,Text,StyleSheet, Pressable,Image,ImageBackground, Alert,ToastAndroid} from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
const logoImage = require('../assets/images/logo-login.webp')
const backGroundImage = require('../assets/images/background.jpeg')
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import {users} from '../data/users'



export default function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });

    if(!fontsLoaded){
        return null
    }

    function handleLogin(){
        if(username.trim()=="" || password.trim()==""){
            Alert.alert("Invalid data","Please provide a value")
        }else{
            const userExist = users.find((item)=>item.username==username)
                if(userExist){
                    if(userExist.password==password){
                        ToastAndroid.show(`Welcome back ${username}`,ToastAndroid.SHORT)
                        router.push(`/dashboard?username=${encodeURIComponent(username)}`)
                    }else{
                        Alert.alert("Oops","Invalid credentials")
                    }
                }else{
                    Alert.alert("Oops","No such user exist")

                }
            }
        }
    

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backGroundImage} style={{flex:1}}>
            <View style={styles.viewStyle}>
            <Image source={logoImage} style={styles.logo}/>
                <Text style={styles.label}>Username:</Text>
                <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="enter your username"/>
                <Text style={styles.label}>Password:</Text>
                <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="enter your password"/>
                <Pressable style={styles.loginButton} onPress={handleLogin}><Text style={styles.loginButtonText}>Login</Text></Pressable>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    viewStyle:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        width:"100%",
        gap:10,
        paddingHorizontal:20,
    },
    loginButton:{
        marginTop:20,
        backgroundColor:"black",
        padding:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        
    },
    loginButtonText:{
        fontSize:20,
        color:"white",
        fontFamily:'Poppins_400Regular'
    },
    input:{
        width:"100%",
        borderWidth:2,
        borderColor:"black",
        padding:4,
        borderRadius:10,
        paddingHorizontal:10,
    },
    label:{
        fontSize:20,
        fontWeight:"400",
        fontFamily:'Poppins_400Regular',
        marginTop:5
    },
    logo:{
        width:200,
        height:200,
        alignSelf:"center"
    }
})