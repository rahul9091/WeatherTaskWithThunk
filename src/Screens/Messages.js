//import liraries
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    useWindowDimensions,
    StatusBar,
    Alert,
    Animated,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';

import { getWeather } from '../redux/action/books'

import { showIndicator, hideIndicator } from '../redux/action/basicActions';


import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
import moment from 'moment';

const API_KEY = 'AIzaSyAxqQTVZgyU9PRhHuTBX8FefmlJZa_iidc';

const Messages = (props) => {
    const { width: windowWidth, height: windowHeight } = useWindowDimensions()

    const [currentAddress, setCurrentAddress] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch()
    const indicator = useSelector((state) => state.BasicReducer.indicatorStatus)
    console.log(indicator, 'indicator')


    useEffect(() => {
        dispatch(showIndicator())
        try {
            dispatch(showIndicator())
            getCurrentLocation();
            setTimeout(() => {
                getAddress(lat, long)
            }, 5000)
            dispatch(hideIndicator())
        } catch (error) {
            setError(true)
            console.log(error)
        }
          dispatch(hideIndicator())

    }, [getAddress])


    useEffect(() => {
        sendCurrentAddress(currentAddress)
    }, [currentAddress])



    const sendCurrentAddress = (currentAddress) => { dispatch(getWeather(currentAddress)) }

    const getCurrentLocation = async () => {
        Geolocation.getCurrentPosition(
            position => {
                const location = position
                const latlong = position.coords
                const lat = latlong.latitude
                const lng = latlong.longitude


                console.log(lat, 'lat')
                console.log(lng, 'lng')
                setLat(lat);
                setLong(lng);


            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    const getAddress = async (lat, long) => {
        await Geocoder.fallbackToGoogle(API_KEY);
        console.log(lat, 'lat in getDaressfjleskjf')
        console.log(long, 'long in')
        const res = await Geocoder.geocodePosition({
            lat: lat,
            lng: long
        })

        setCurrentAddress(res[0].locality)
    }

    const dataArr = useSelector((state) => state.booksReducer.weatherData)
    const temp = dataArr[0]?.main?.temp ?? null

    if (indicator) {
        return <ActivityIndicator animating={true} size="large" color="red" />
    }

    if (error) {
       return( 
       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:35,color:'#696969'}}>Something Went Wrong At our End</Text>
            <Button style={{borderWidth:1,padding:10,borderColor:'black',marginTop:15}}
            color="#696969"
            onPress={()=>sendCurrentAddress(currentAddress)}
            >
                Try again
            </Button>
        </View>
       )
    }
    return (
        <View style={{ width: windowWidth, height: windowHeight }}>
            <ImageBackground
                source={require('../assets/sunny.jpg')}
                style={{
                    flex: 1,
                }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        padding: 20,
                    }}>
                    <View style={styles.topInfoWrapper}>
                        <View>
                            <Text style={styles.city}>{currentAddress}</Text>

                        </View>
                        <View>
                            <Text style={styles.temparature}>
                                {temp}
                            </Text>

                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'rgba(255,255,255,0.7)',
                            marginTop: 20,
                            borderBottomWidth: 1,
                        }}
                    />
                    <FlatList
                        data={dataArr}
                        keyExtractor={(item) => item.dt}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flex: 1, maringTop: 10 }}>
                                    <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, padding: 20, flexDirection: 'row', justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 16 }} >{moment(item.dt_txt).format("dddd")}</Text>
                                        <Text style={{ fontSize: 16 }}> Temp: {item.main.temp}</Text>
                                    </View>

                                </View>
                            )
                        }}
                    />


                </View>
            </ImageBackground>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    appHeader: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 20
    },
    topInfoWrapper: {
        flex: 1,
        marginTop: 10,
        alignItems: "center",
        justifyContent: 'space-between',
    },
    city: {
        color: '#fff',
        fontSize: 30,

        fontWeight: 'bold',
    },
    time: {
        color: '#fff',

        fontWeight: 'bold',
    },
    temparature: {
        color: '#fff',
        fontSize: 85,
    },
    weatherType: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 34,
        marginLeft: 10,
    },
    bottomInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    infoText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
    },
    infoBar: {
        width: 45,
        height: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    indicatorWrapper: {
        position: 'absolute',
        top: 140,
        left: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    normalDot: {
        height: 5,
        width: 5,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Messages;
