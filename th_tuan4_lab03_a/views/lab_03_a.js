import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 283,
          width: 390,
          borderWidth: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/book.png')}
            style={{
              height: 127,
              width: 104,
              marginLeft: 12,
              marginTop: 14,
            }}></Image>
          <View style={{ height: 127, marginLeft: 25, marginTop: 14 }}>
            <Text
              style={{
                fontSize: 12,
                color: '#000000',
                lineHeight: 14,
                fontWeight: 700,
              }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#000000',
                lineHeight: 14,
                fontWeight: 700,
                marginTop: 14,
              }}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#EE0D0D',
                lineHeight: 21,
                fontWeight: 700,
                marginTop: 11,
              }}>
              141.800 đ
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#808080',
                lineHeight: 14,
                textDecorationLine: 'line-through',
                fontWeight: 700,
                marginTop: 11,
              }}>
              141.800 đ
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 26,
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={{ width: 14.22, height: 16 }}>
                  <Text style={{ borderWidth: 1, textAlign: 'center' }}>+</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  1
                </Text>
                <TouchableOpacity style={{ width: 14.22, height: 16 }}>
                  <Text style={{ borderWidth: 1, textAlign: 'center' }}>-</Text>
                </TouchableOpacity>
              </View>

              <Text style={{ color: '#134FEC', fontWeight: 700 }}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 12, marginTop: 14 }}>
          <Text style={{ color: 'black', fontWeight: 700, fontSize: 12 }}>
            Mã giảm giá đã lưu
          </Text>
          <Text
            style={{
              color: '#134FEC',
              marginLeft: 17,
              fontWeight: 700,
              fontSize: 12,
            }}>
            Xem tại đây
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 12, marginTop: 35 }}>
          <View
            style={{
              flexDirection: 'row',
              width: 208,
              height: 45,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                width: 32,
                height: 16,
                backgroundColor: 'yellow',
                margin: 13,
              }}></View>
            <Text style={{ fontSize: 18, lineHeight: 21, fontWeight: 700 }}>
              Mã giảm giá
            </Text>
          </View>
          <View
            style={{
              width: 99,
              height: 45,
              backgroundColor: '#0A5EB7',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 24,
            }}>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 23,
                color: 'white',
                fontWeight: 700,
              }}>
              Áp dụng
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 389,
          height: 51,
          flexDirection: 'row',
          marginTop: 14,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 14,
            fontWeight: 700,
            marginLeft: 13,
          }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 14,

            color: 'blue',
            paddingRight: 42,
          }}>
          Nhập tại đây?
        </Text>
      </View>
      <View
        style={{
          width: 390,
          height: 51,
          flexDirection: 'row',
          marginTop: 12,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 14,
            fontWeight: 700,
            marginLeft: 13,
          }}>
          Tạm tính
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 21,
            fontWeight: 700,
            color: 'red',
            marginRight: 32,
          }}>
          141.800 đ
        </Text>
      </View>
      <View style={{ width: 390, height: 120, backgroundColor: 'white' , marginTop : 102 }}>
        <View
          style={{
            width: 390,
            height: 51,
            flexDirection: 'row',
            marginTop: 12,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 14,
              fontWeight: 700,
              marginLeft: 13,
            }}>
            Tạm tính
          </Text>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 21,
              fontWeight: 700,
              color: 'red',
              marginRight: 32,
            }}>
            141.800 đ
          </Text>
        </View>
        <View
          style={{
            width: 390,
            height: '100%',
            flexDirection: 'row',
            marginTop: 12,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 344,
              height: 45,
              backgroundColor: 'red',
              margin: 13,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: 'white', lineHeight: 23, fontWeight: 700 }}>
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4C4C4',
    width: 390,
    height: 640,
    flex: 1,
    borderWidth: 1,
    flexDirection: 'column',
  },
});
