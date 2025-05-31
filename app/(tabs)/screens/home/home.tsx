import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';


function Home() {      
  return (
    <SafeAreaView>
      
      <View style={styles.smallcontainer}>
        <Text style={styles.title}>Planner</Text>

        <View>
            <Text>원곡중학교</Text>
            <Text style={styles.text}>3학년 10반</Text>
        </View>
      </View>

      <Text style={styles.title}>수행평가</Text>

      <View style={styles.board}>
        <View>
          <Text style={styles.text}>국어 발표</Text>
          <Text>5월 12일</Text>
        </View>

        <Text style={styles.text}>D-6</Text>
      </View>
      <View style={styles.board}>
        <View>
          <Text style={styles.text}>국어 발표</Text>
          <Text>5월 12일</Text>
        </View>

        <Text style={styles.text}>D-6</Text>
      </View>
      <View style={styles.board}>
        <View>
          <Text style={styles.text}>국어 발표</Text>
          <Text>5월 12일</Text>
        </View>

        <Text style={styles.text}>D-6</Text>
      </View>

      <TouchableOpacity>
          <Text style={styles.button}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 40
    },

    text: {
      fontSize: 20,
      fontWeight: 'bold'
    },


    smallcontainer: {
      marginRight: 40,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
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

export default Home;