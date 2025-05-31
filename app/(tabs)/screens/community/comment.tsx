import React from "react";
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

function  Com() {      
  return (
    <SafeAreaView>
        <Text style={styles.title}>&lt;</Text>

        <View style={styles.board}>
            <View>
                <View>
                    {/* 사진 */}
                    <Text style={styles.text}>안민혜</Text>
                </View>
                <Text style={styles.text1}>영어 단어 뭐뭐 외워야 하니..ㅠㅠㅠ</Text>
                <View style={styles.smallcontainer}>
                    <View>
                        {/* 하트 아이콘 */}
                        <Text style={styles.text}>12</Text>
                    </View>
                </View>
            </View>
        </View>

        <Text style={styles.title}>댓글</Text>

        <View style={styles.board}>
            <View>
                <View>
                    {/* 사진 */}
                    <Text style={styles.text}>안민혜</Text>
                </View>
                <Text style={styles.text1}>영어 단어 뭐뭐 외워야 하니..ㅠㅠㅠ</Text>
            </View>
        </View>

        <View style={styles.board}>
            <View>
                <View>
                    {/* 사진 */}
                    <Text style={styles.text}>안민혜</Text>
                </View>
                <Text style={styles.text1}>영어 단어 뭐뭐 외워야 하니..ㅠㅠㅠ</Text>
            </View>
        </View>
        
        <View  style={styles.comment}>
            <TextInput placeholder="댓글을 달아주세요"></TextInput>
            {/* 보내기 아이콘 */}
        </View>

        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 40,
        marginBottom: 20,
    },

    text: {
      fontSize: 20,
      fontWeight: 'bold'
    },

    text1: {
        fontSize: 15,
        paddingVertical: 10,  
    },

    smallcontainer: {
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    board: {
      marginHorizontal: 40,
      marginBottom: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20
    },

    comment: {
        backgroundColor: 'lightgray',
        marginHorizontal: 40,
        marginVertical: 20,
        padding: 10,
        borderRadius: 10
    }
})

export default Com;