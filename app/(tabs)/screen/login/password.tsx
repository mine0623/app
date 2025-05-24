import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

function Password() {      
  return (
    <SafeAreaView>
      <Text style={styles.title}>비밀번호 설정</Text>

      <TextInput style={styles.input}></TextInput>

      <TouchableOpacity>
        <Text style={styles.button}>완료</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 40,
        marginTop: 100
    },

    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        fontSize: 20,
        marginTop: 40,
        marginRight: 40,
        marginLeft: 40,
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


export default Password;