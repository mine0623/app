import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';


function Calendar() {

  const timetable = [
    { period: 1, Mon: '국어', Tue: '', Wed: '', Thu: '', Fri: '' },
    { period: 2, Mon: '',    Tue: '', Wed: '', Thu: '', Fri: '' },
    { period: 3, Mon: '',    Tue: '', Wed: '', Thu: '', Fri: '' },
    { period: 4, Mon: '',    Tue: '', Wed: '', Thu: '', Fri: '' },
    { period: 5, Mon: '',    Tue: '', Wed: '', Thu: '', Fri: '' },
    { period: 6, Mon: '',    Tue: '', Wed: '', Thu: '', Fri: '' },
    { period: 7, Mon: '',    Tue: '', Wed: '', Thu: '', Fri: '' },
  ];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  return (
    <SafeAreaView>
      <Text style={styles.title}>Today</Text>
      <Text style={styles.date}>2025년 5월 6일</Text>

      <View style={styles.smallContainer}>
        <View style={styles.smallContainer}>
          <Text style={styles.period}>5.12 ~ 5.16</Text>
        </View>

        <View style={styles.arrows}>
          <TouchableOpacity><Text style={styles.arrow}>&lt;</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.arrow}>&gt;</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.cellTime} />
          {days.map((day) => (
            <View key={day} style={styles.cell}>
              <Text style={styles.headerText}>{day}</Text>
            </View>
          ))}
        </View>

        {/* 시간표 내용 */}
        {/* {timetable.map((row) => (
          <View key={row.period} style={styles.row}>
            <View style={styles.cellTime}>
              <Text>{row.period}</Text>
            </View>
            {days.map((day) => (
              <View
                key={day}
                style={[
                  styles.cell,
                  row[day] ? styles.highlightCell : null,
                ]}
              >
                <TouchableOpacity>
                  <Text style={styles.subjectText}>{row[day]}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))} */}
      </View>

    </SafeAreaView>
  )};

  const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 40,
        marginBottom: 0
    },

    date: {
      fontSize: 25,
      fontWeight: 'bold',
      marginHorizontal: 40,
      marginVertical: 20
    },

    period: {
      marginLeft: 40,
      backgroundColor: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      padding: 10,
      borderRadius: 10
    },
    
    text: {
      fontSize: 25,
      fontWeight: 'bold'
    },

    arrows: {
      marginRight: 40,
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

    smallContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    container: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      margin: 40,
    },

    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },

    cellTime: {
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },

    cell: {
      flex: 1,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },

    highlightCell: {
      backgroundColor: 'lightgray',
    },

    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
    },

    subjectText: {
      fontSize: 18,
      fontWeight: 'bold',
    }
});

export default Calendar;