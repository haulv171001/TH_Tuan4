import React from 'react';
import { StyleSheet, Text, View , Image ,TouchableOpacity } from 'react-native';
export default function Sreen1() {
  return (
    <View style={styles.container}>
        <Image style={{ width: 270, height: 325, marginTop: 50, alignSelf: 'center' }} source={require('../assets/vsmart_live_xanh.png')} />
        <View style={{justifyContent:'flex-start',marginLeft: 23}}><Text style={{marginTop: 26, fontSize: 15 }}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text></View>
        <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
            <Image style={{width:23,height:25,marginTop: 13, marginLeft: 23}} source={require('../img/Star.png')}/>
            <Image style={{width:23,height:25,marginTop: 13, marginLeft: 2}} source={require('../img/Star.png')}/>
            <Image style={{width:23,height:25,marginTop: 13, marginLeft: 2}} source={require('../img/Star.png')}/>
            <Image style={{width:23,height:25,marginTop: 13, marginLeft: 2}} source={require('../img/Star.png')}/>
            <Image style={{width:23,height:25,marginTop: 13, marginLeft: 2}} source={require('../img/Star.png')}/>
            <Text style={{ fontSize: 15, marginHorizontal: 25, marginTop: 13 }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
            <Text style={{ fontSize: 18, marginHorizontal: 25, marginTop: 13 , fontWeight: 'bold'}}>1.790.000 đ</Text>
            <Text style={{ fontSize: 18, marginHorizontal: 25, marginTop: 13 ,textDecorationLine:'line-through'}}>1.790.000 đ</Text>
        </View>
        <View style={{flexDirection:'row' ,alignSelf:"flex-start"}}>
            <Text style={{ fontSize: 14, marginLeft:25, marginTop: 13 , fontWeight: 'bold',color:'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image style={{ marginTop: 27, width: 20, height: 20 ,marginTop: 13,marginLeft:8 }} source={require('../img/Group.png')} />
        </View>
        <TouchableOpacity style={{ flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 332, height: 40, alignSelf: 'center', marginTop: 19 }}>
        <Text style={{ marginLeft: 100, alignSelf: 'center', fontSize: 16, lineHeight: 21, fontWeight: 'bold', color: 'black' }}>4 MÀU - CHỌN MÀU</Text>
        <Image style={{ alignSelf: 'center', marginLeft: 60 }} source={require('../img/Vector.png')} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 332, height: 50, alignSelf: 'center', justifyContent: 'center', marginVertical: 160, backgroundColor: 'red' }}>
        <Text style={{ alignSelf: 'center', fontSize: 16, lineHeight: 21, fontWeight: 'bold', color: 'white' }}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
    }
});
