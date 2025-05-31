import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

function  Commu() {      
  return (
    <SafeAreaView>
        <Text style={styles.title}>community</Text>
        <View style={styles.header}>
            <Text style={styles.text}>3학년 10반</Text>
            <TouchableOpacity><Text style={styles.plus}>+</Text></TouchableOpacity>
        </View>

        <View>
            <TextInput style={styles.input} placeholder='검색하세요'></TextInput>
            {/* 돋보기 아이콘 */}
        </View>

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
                    <View>
                        {/* 댓글글 아이콘 */}
                        <Text style={styles.text}>3</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.board}>
            <View>
                <View>
                    {/* 사진 */}
                    <Text style={styles.text}>안민혜</Text>
                </View>
                <View>
                    <Text style={styles.text1}>이게 뭐야 애들아..</Text>
                    {/* 사진 */}
                </View>
                <View style={styles.smallcontainer}>
                    <View>
                        {/* 하트 아이콘 */}
                        <Text style={styles.text}>12</Text>
                    </View>
                    <View>
                        {/* 댓글글 아이콘 */}
                        <Text style={styles.text}>3</Text>
                    </View>
                </View>
            </View>
        </View>

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
                    <View>
                        {/* 댓글글 아이콘 */}
                        <Text style={styles.text}>3</Text>
                    </View>
                </View>
            </View>
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
      fontSize: 25,
      fontWeight: 'bold'
    },

    text1: {
        fontSize: 18,
        paddingVertical: 15,
    },

    header: {
        marginHorizontal: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    plus: {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 50,
        padding: 7,
        paddingHorizontal: 15,
        fontSize: 30,
    },

    input: {
        backgroundColor: 'lightgray',
        borderRadius: 25,
        marginHorizontal: 40,
        marginVertical: 20,
        padding: 15
    },

    smallcontainer: {
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    board: {
      margin: 40,
      marginTop: 0,
      marginBottom: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20
    }
})

export default Commu;