import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function Sreen2() {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Image style={{ width: 119, height: 126, alignSelf: 'center' ,marginRight:5}} source={require('../img/vsmart_live_xanh.png')}>
                </Image>
                <View style={{ marginTop: 65 }}>
                    <Text >
                        Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng
                    </Text>
                    <Text style={{ marginVertical: 9 }}>Màu: đỏ</Text>
                    <Text style={{ marginBottom: 6 }}>Cung cấp bởi Tiki Tradding</Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>1.790.000 đ</Text>
                </View>
            </View>
            <View style={styles.box2}>
                <Text
                    style={{
                        fontSize: 18,
                        marginVertical: 10,
                        marginHorizontal: 17
                    }}
                >Chọn một màu bên dưới:
                </Text>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={[styles.boxcolor,{backgroundColor:'#C5F1FB'}]}></View>   
                    <View style={[styles.boxcolor,{backgroundColor:'#F30D0D'}]}></View>
                    <View style={[styles.boxcolor,{backgroundColor:'#000000'}]}></View>
                    <View style={[styles.boxcolor,{backgroundColor:'#234896'}]}></View> 
                </View>
                <View style={{marginHorizontal:17}}>
                <TouchableOpacity style={{width:'100%',backgroundColor:'#234896',height:44,alignItems:'center',justifyContent:'center',marginVertical:13,borderRadius:10}}>
                    <Text style={{
                        fontSize:20,
                        color:'white',
                        fontWeight:'bold'
                    }}>XONG</Text>    
                </TouchableOpacity>      
                </View>  
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    box1: {
        flex: 30,
        backgroundColor: 'white',
        marginHorizontal: 5,
        marginVertical: 7,
        flexDirection: 'row',
    },
    box2: {
        backgroundColor: '#C4C4C4',
        flex: 70,
    },
    boxcolor : {
        width:85,
        height:80,
        marginVertical:13
    }
})