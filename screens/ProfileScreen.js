import React, { useContext,  } from "react";
import {TouchableOpacity, Text, View, Clipboard } from 'react-native';
import UpTab from "../components/UpTab"
import QRCode from 'react-native-qrcode-svg';
import { AuthContext } from "../context/AuthContext";
import styles from './Style'
import colors from '../config/colors'



export default function ProfileScreen(){
    const { user } = useContext(AuthContext);
    const uuid = user.uuid    
    const copyIt = ()=> Clipboard.setString(uuid)
    return(
        <>
            
            
            <View style={{height: '100%'}}>
                <View style={styles.profilecontainer}>
                    <Text style={styles.profilecontainertext}>
                        {user.name}
                    </Text>  

                    <View style={{width:150,height:150, borderRadius: 100, backgroundColor:'white'}}>
                    </View>      
                    <View style={{alignItems: 'center'}}>
                        <View style={{width:'100%', height: '20%', flexWrap: 'wrap', alignItems:'space-between'}}>
                            <View style={{ height: '100%', width:'30%', alignItems:'center', justifyContent: 'center', margin:10 }}>
                                <Text style={{fontSize: 25, color: 'white'}}>13</Text>
                                <Text style={{fontSize: 15, color: 'white'}}>scambi fatti</Text>
                            </View>
                            <View style={{ height: '100%', width:'30%', alignItems:'center', justifyContent: 'center',margin: 10}}>
                                <Text style={{fontSize: 25, color: 'white'}}>5</Text>
                                <Text style={{fontSize: 15, color: 'white'}}>allenatori</Text>
                            </View>
                            <View style={{ height: '100%', width:'30%', alignItems:'center', justifyContent: 'center',margin: 10}}>
                                <Text style={{fontSize: 25, color: 'white'}}>3</Text>
                                <Text style={{fontSize: 15, color: 'white'}}>palestre</Text>
                            </View>
                        </View>
                    </View>
                </View>

                
                <View  style={{alignItems: 'center', width: '100%', height: '50%', justifyContent: 'center'}}>

                    <TouchableOpacity onPress={copyIt}>
                            <QRCode 
                                value= {user.uuid}
                                color= '#0099e5'
                                size={250}
                                backgroundColor= 'transparent'             
                                
                            />
                    </TouchableOpacity>                  

                    <Text style={{fontSize: 25, color:colors.blu, margin: 20}}>scan the qr or click to copy</Text>


                   

                   
                </View>
            </View>
           
        </>
    )
}