import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

function See(){      
  return (
    <SafeAreaView>
        <Text style={styles.title}>&lt;</Text>

        <View style={styles.smallcontainer}>
          <View>
            <Text style={styles.title}>국어 발표</Text>
            <Text style={styles.text}>5월 12일 1교시</Text>
          </View>
          <Text style={styles.title}>D-6</Text>
        </View>
        
        <View style={styles.view}></View>

        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.button}>알림 설정</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>수정하기</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 40,
        marginBottom: 0
    },

    text: {
      marginLeft: 40,
      marginTop: 5,
      fontSize: 20,
      fontWeight: 'bold'
    },


    smallcontainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    view: {
      margin: 40,
      backgroundColor: 'white',
      padding: 150,
      borderRadius: 10
    },

    buttons: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 40,
    },

    button: {
      backgroundColor: 'white',
      fontSize: 20,
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 8,
      fontWeight: 'bold',
    }
})

export default See;