import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

function Calendar() {      
  return (
    <SafeAreaView>
      <Text>Today</Text>
      <Text>2025년 5월 6일</Text>
    
      <TouchableOpacity>5.12 ~ 5.16</TouchableOpacity>
    </SafeAreaView>
  );
}

export default Calendar;