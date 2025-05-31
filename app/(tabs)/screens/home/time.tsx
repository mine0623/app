import { StyleSheet  } from 'react-native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';


  const ITEM_HEIGHT = 40;

function Time() {      

  const [ampm, setAmPm] = useState('오전');
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(0);

    // const scrollItems = (items, selected, onSelect) => (
    //   <ScrollView
    //     showsVerticalScrollIndicator={false}
    //     snapToInterval={ITEM_HEIGHT}
    //     decelerationRate="fast"
    //     contentContainerStyle={{ paddingVertical: height / 4 }}
    //     onMomentumScrollEnd={(e) => {
    //       const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
    //       onSelect(items[index]);
    //     }}
    //   >
    //     {items.map((item, index) => (
    //       <View
    //         key={index}
    //         style={[
    //           styles.item,
    //           item === selected && styles.selectedItem,
    //         ]}
    //       >
    //         <Text style={[styles.itemText, item === selected && styles.selectedText]}>
    //           {item.toString().padStart(2, '0')}
    //         </Text>
    //       </View>
    //     ))}
    //   </ScrollView>
    // );

  return (
    <SafeAreaView>
      <Text style={styles.icon}>&lt;</Text>
      
      <Text style={styles.text}>5월 12일</Text>

      <View style={styles.dates}>
        <TouchableOpacity>
          <Text style={styles.date}>D-1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>D-2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>D-3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>D-4</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>D-5</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>D-6</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>D-7</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.container}>
        <View style={styles.column}>
          {scrollItems(['오전', '오후'], ampm, setAmPm)}
        </View>
        <View style={styles.column}>
          {scrollItems([...Array(12).keys()].map(i => i + 1), hour, setHour)}
        </View>
        <View style={styles.column}>
          {scrollItems([...Array(12).keys()].map(i => i * 5), minute, setMinute)}
        </View>
      </View> */}

      <View style={styles.selects}>
        <View>
          <Text style={styles.select}>5월 10일</Text>
          <Text style={styles.select}>5월 11일</Text>
        </View>
        <View>
          <Text style={styles.select}>오후 6 : 00</Text>
          <Text style={styles.select}>오후 6 : 00</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.button}>완료</Text>
      </TouchableOpacity>

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

    dates: {
      marginHorizontal: 40,
      marginVertical : 20,
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 5
    },

    date: {
      backgroundColor: 'white',
      padding: 10,
      paddingVertical: 15,
      borderRadius: 50,
      fontSize: 15,
      fontWeight: 'bold'
    },

    selects: {
      borderRadius: 10,
      padding: 15,
      marginHorizontal: 40,
      backgroundColor: 'white',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },

    select: {
      fontSize: 20,
      fontWeight: 500
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
    },

    container: {
      marginHorizontal: 40,
      marginVertical: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
    },

    column: {
      flex: 1,
      alignItems: 'center',
      height: 300,
    },

    item: {
      height: ITEM_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
    },

    selectedItem: {
      // 선택된 항목 스타일4
    },

    itemText: {
      fontSize: 18,
      color: 'black',
    },
    
    selectedText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
})

export default Time;