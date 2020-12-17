import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import UpTab from "../components/UpTab"
import QRCode from 'react-native-qrcode-svg';
import { AuthContext } from "../context/AuthContext";
import styles from './Style'
import colors from '../config/colors'

export default function ProfileScreen(){
    const { user } = useContext(AuthContext);
    return(
        <>
            
            
            <View style={{height: '100%'}}>
                <View style={styles.profilecontainer}>
                    <Text style={styles.profilecontainertext}>
                        {user.name}
                    </Text>  

                <View style={{width:150,height:150, borderRadius: 100, backgroundColor:'white'}}>
                </View>      
            </View>
            <View style={{alignItems: 'center'}}>
                <View style={{width:'90%', height: '20%', flexWrap: 'wrap'}}>
                    <View style={{ height: '100%', width:'33%', alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 30, color:colors.blu}}>13</Text>
                        <Text style={{fontSize: 20, color:colors.blu}}>scambi fatti</Text>
                    </View>
                    <View style={{ height: '100%', width:'33%', alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 30, color:colors.red}}>5</Text>
                        <Text style={{fontSize: 20, color:colors.red}}>allenatori</Text>
                    </View>
                    <View style={{ height: '100%', width:'33%', alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 30, color:colors.green}}>2</Text>
                        <Text style={{fontSize: 20, color:colors.green}}>palestre</Text>
                    </View>
                </View>

                
                <View  style={{alignItems: 'center', width: '90%', height: '60%', justifyContent: 'space-around'}}>
                <Text style={{fontSize: 30, color:colors.blu}}>scan this qr </Text>

                <QRCode 
                    value= {user.uuid}
                    color= '#0099e5'
                    size={150}
                    backgroundColor= 'transparent'             
                    
                    />
                    <Text style={{fontSize: 20, color:colors.blu}}>or click to copy the code</Text>
                    <Text style={{fontSize: 8, color:colors.blu}}>{user.uuid}</Text>
                </View>
            </View>
            </View>
        </>
    )
}