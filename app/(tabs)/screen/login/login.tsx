import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard

} from 'react-native';

function Login() {      
  return ( 
    <SafeAreaView>
      <Text style={styles.title}>Planner</Text>

      <View style={styles.main}>
        <TextInput style={styles.input} placeholder="학교"/>

        <View style={styles.smallcontainer}>
          <TextInput style={styles.smallInput} placeholder="학년"/>
          <TextInput style={styles.smallInput} placeholder="반"/>
        </View>

        <TextInput style={styles.input} placeholder="이름"/>
      </View>


      <TouchableOpacity>
        <Text style={styles.button}>login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 40,
        marginTop: 100
    },

    main: {
      margin: 40
    },

    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 20,
        marginBottom: 20
    },

    smallcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      gap: 10
    },

    smallInput: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 12,
      fontSize: 20,
      flex: 1,
    },

    button: {
      backgroundColor: 'black',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
      borderRadius: 10,
      margin: 40
    }
})

export default Login;