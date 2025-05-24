import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

function Plus() {      
  return (
    <SafeAreaView>
      <Text style={styles.icon}>&lt;</Text>

      <View style={styles.header}>
        <Text style={styles.period}>5.5 ~ 5.9</Text>

        <View style={styles.arrows}>
          <TouchableOpacity><Text style={styles.arrow}>&lt;</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.arrow}>&gt;</Text></TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.dates}>
        <TouchableOpacity>
          <Text style={styles.date}>mon</Text>
          <Text style={styles.date}>5.5</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>tue</Text>
          <Text style={styles.date}>5.6</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>wed</Text>
          <Text style={styles.date}>5.7</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>thu</Text>
          <Text style={styles.date}>5.8</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>fri</Text>
          <Text style={styles.date}>5.9</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>과목</Text>
      <TextInput style={styles.bar} placeholder=""></TextInput>
      
      <View style={styles.orders}>
        <TouchableOpacity>
          <Text style={styles.order}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.order}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.order}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.order}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.order}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.order}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.order}>7</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header2}>
        <Text style={styles.text}>설명</Text>
        <TouchableOpacity>
          <Text style={styles.img}>사진 첨부</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="내용을 입력하세요"></TextInput>

      <TouchableOpacity><Text style={styles.button}>+</Text></TouchableOpacity>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 40,
        marginBottom: 20
    },

    text: {
      marginLeft: 40,
      fontSize: 25,
      fontWeight: 'bold'
    },

    period: {
      backgroundColor: 'white',
      padding: 10,
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 10
    },

    dates: {
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 40,
      marginTop: 0,
      backgroundColor: 'white',
      borderRadius: 10,
      gap: 25,
      padding: 10
    },

    date: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },

    arrows: {
      flexDirection: 'row',
      gap: 10
    },

    arrow: {
      backgroundColor: 'white',
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 50
    },

    header: {
      margin: 40,
      marginBottom: 10,
      marginTop: 0,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    bar: {
      marginLeft: 40,
      width: 100,
      borderBottomWidth: 1,
      paddingVertical: 10,
    },

    input: {
      margin: 40,
      marginTop: 0,
      marginBottom: 20,
      padding: 10,
      paddingBottom: 50,
      borderRadius: 10,
      backgroundColor: 'white'
    },

    orders: {
      margin: 40,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 5
    },

    order: {
      backgroundColor: "white",
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 50,
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15
    },

    button: {
      backgroundColor: 'black',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
      borderRadius: 10,
      margin: 40,
      marginTop: 0
    },


    img: {
      padding: 10,
      margin: 40,
      marginBottom: 20,
      borderRadius: 10,
      width: 100,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'white',
    },

    header2: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
})

export default Plus;