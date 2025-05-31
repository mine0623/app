import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

function Plus(){      
  return (
    <SafeAreaView>
        <Text style={styles.title}>&lt;</Text>

        <TouchableOpacity><Text style={styles.text}>사진 첨부</Text></TouchableOpacity>
        
        <TextInput placeholder='내용을 입력하세요' style={styles.view}></TextInput>

        <TouchableOpacity><Text style={styles.button}>+</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      margin: 40,
    },

    text: {
      marginLeft: 40,
      backgroundColor: 'white',
      borderRadius: 10,
      width: 100,
      textAlign: 'center',
      padding: 10,
      fontSize: 20,
      fontWeight: 'bold'
    },


    view: {
      margin: 40,
      backgroundColor: 'white',
      padding: 10,
      paddingBottom: 200,
      borderRadius: 10
    }, 

    button: {
      backgroundColor: 'black',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
      borderRadius: 10,
      marginTop: 20,
      marginRight: 40,
      marginLeft: 40,
    }
})

export default Plus;