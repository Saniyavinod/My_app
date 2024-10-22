import React, { useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';

const downArrow = require('../assets/images/down-arrow.png')
const carImage = require('../assets/images/car.png')
const patreonLogo = require('../assets/logos/Logo_Patreon.png')
const rightArrow = require('../assets/images/right-arrow.png')
const netflixLogo = require('../assets/logos/Logo_Netflix.png')
const appleLogo = require('../assets/logos/Logo_Apple.png')
const spotifyLogo = require('../assets/logos/Logo_Spotify.png')




const dashboard = () => {
    

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_200ExtraLight
    });

    if (!fontsLoaded) {
        return null
    }



    return (
        <SafeAreaView>
            <View style={styles.outerView}>
                <View style={styles.dateView}>
                    <Text style={styles.dateText}>September 2020</Text>
                    <Image style={styles.downArrowImage} source={downArrow} />
                </View>
                <Text style={styles.amount}>$1,812</Text>

                <View style={{display:"flex",width:"100%",borderWidth:1,borderColor:"gray",padding:16,borderRadius:15}}>
                    <View style={styles.firstView}>
                        <View>
                            <Text style={styles.inBoxText}>Left to spend</Text>
                            <Text style={styles.inBoxAmount}>$738</Text>
                        </View>
                        <View>
                            <Text style={styles.inBoxText}>Monthly budget</Text>
                            <Text style={styles.inBoxAmount}>$2,550</Text>
                        </View>

                    </View>
                    <View style={{height:8,width:"100%",flexDirection:"row",backgroundColor:"gainsboro",borderTopLeftRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                        <View style={{ backgroundColor: "darkorange",height:"100%",width:"15%",borderTopLeftRadius:10,borderBottomLeftRadius:10 }}></View>
                        <View style={{ backgroundColor: "deepskyblue",height:"100%",width:"25%" }}></View>
                        <View style={{ backgroundColor: "darkviolet",height:"100%",width:"35%",borderBottomRightRadius:10,borderTopRightRadius:10  }}></View>
                    </View>
                </View>

                <View style={{display:"flex",width:"100%",borderWidth:1,borderColor:"gray",padding:16,borderRadius:15,rowGap:6}}>
                    <View style={styles.secondView}>
                        <View style={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:20}}>
                            <View style={{backgroundColor:"plum",alignSelf:"flex-start",padding:14,borderRadius:15}}><Image source={carImage} style={{height:24,width:24}}/></View>
                            <Text style={styles.inBoxText}>Auto & transport</Text>
                        </View>
                        <View>
                            <Text style={styles.lightAmount}>$700</Text>
                        </View>

                    </View>
                    
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={styles.boldText}>Auto & transport</Text>
                        <Text style={styles.inBoxAmount}>$350</Text>
                    </View>
                    <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                        <View style={{height:5,width:"80%",flexDirection:"row",backgroundColor:"gainsboro",borderTopLeftRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                            <View style={{ backgroundColor: "darkviolet",height:"100%",width:"70%",borderBottomRightRadius:10,borderTopRightRadius:10  }}></View>
                        </View>
                        <Text style={styles.smallText}>Left $186</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={styles.boldText}>Auto insurance</Text>
                        <Text style={styles.inBoxAmount}>$250</Text>
                    </View>
                    <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                        <View style={{height:5,width:"80%",flexDirection:"row",backgroundColor:"gainsboro",borderTopLeftRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                            <View style={{ backgroundColor: "darkviolet",height:"100%",width:"50%",borderBottomRightRadius:10,borderTopRightRadius:10  }}></View>
                        </View>
                        <Text style={styles.smallText}>Left $120</Text>
                    </View>

                </View>

                <View style={{display:"flex",width:"100%",borderWidth:1,borderColor:"gray",padding:16,borderRadius:15,rowGap:10}}>
                    <View style={styles.secondView}>
                        <View style={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:20}}>
                            <Image source={patreonLogo} style={{height:42,width:42}}/>
                            <View style={{display:"flex"}}>
                            <Text style={styles.inBoxText}>Patreon membership</Text>
                            <Text style={styles.inBoxAmount}>$19.99/mo</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={rightArrow}/>
                        </View>

                    </View> 
                    <View style={styles.secondView}>
                        <View style={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:20}}>
                            <Image source={netflixLogo} style={{height:42,width:42}}/>
                            <View style={{display:"flex"}}>
                            <Text style={styles.inBoxText}>Netflix</Text>
                            <Text style={styles.inBoxAmount}>$12/mo</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={rightArrow}/>
                        </View>

                    </View> 

                    <View style={styles.secondView}>
                        <View style={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:20}}>
                            <Image source={appleLogo} style={{height:42,width:42}}/>
                            <View style={{display:"flex"}}>
                            <Text style={styles.inBoxText}>Apple payment</Text>
                            <Text style={styles.inBoxAmount}>$19.99/mo</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={rightArrow}/>
                        </View>

                    </View> 

                    <View style={styles.secondView}>
                        <View style={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:20}}>
                            <Image source={spotifyLogo} style={{height:42,width:42}}/>
                            <View style={{display:"flex"}}>
                            <Text style={styles.inBoxText}>Spotify</Text>
                            <Text style={styles.inBoxAmount}>$6.99/mo</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={rightArrow}/>
                        </View>

                    </View> 
                </View>


            </View>
        </SafeAreaView>
    )
}

export default dashboard

const styles = StyleSheet.create({
    outerView: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        paddingHorizontal:20,
        height:"100%",
        justifyContent:"center",
        rowGap:15
    },
    dateView: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 7
    },
    dateText: {
        fontSize: 10,
        fontFamily: "Poppins_400Regular"
    },
    amount: {
        fontSize: 45,
        fontFamily: "Poppins_600SemiBold"
    },
    downArrowImage: {
        width: 15,
        height: 15
    },
    firstView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    secondView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems:"center"
    },
    inBoxText:{
        fontSize:14,
        fontFamily: "Poppins_400Regular"
    },
    inBoxAmount:{
        fontSize:20,
        fontFamily: "Poppins_600SemiBold",
        fontWeight:"600"
    },
    lightAmount:{
        fontSize:20,
        fontFamily: "Poppins_200ExtraLight",
        fontWeight:"300"
    },
    boldText:{
        fontSize:17,
        fontFamily:"Poppins_600SemiBold"
    },
    smallText:{
        fontSize:12,
        fontFamily:"Poppins_400Regular"
    }
})