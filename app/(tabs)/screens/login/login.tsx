import React, { useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView, 
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert 
} from 'react-native';

import { fetchSignInMethodsForEmail } from 'firebase/auth';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { auth } from '../../firebase';
import type { RootStackParamList } from '../../navigation/AppNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

function Login({ navigation }: Props) {
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');

  const Next = async () => {
    if (!school || !grade || !room || !name) {
      Alert.alert('입력 오류', '모든 정보를 입력해주세요.');
      return;
    }

    const fakeEmail = `${school}_${grade}-${room}_${name}@app.mineplan`.replace(/\s/g, '');

    try {
      const methods = await fetchSignInMethodsForEmail(auth, fakeEmail);
      const isNewUser = methods.length === 0;
      navigation.navigate('Pass', { email: fakeEmail, isNewUser });
    } catch (error: any) {
      Alert.alert('오류', '서버와 통신하는 중 문제가 발생했습니다. 다시 시도해주세요.');
      console.error(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.title}>Planner</Text>

        <View style={styles.main}>

          <TextInput style={styles.input} placeholder="학교" value={school} onChangeText={setSchool} />

          <View style={styles.smallcontainer}>
            <TextInput style={styles.smallInput} placeholder="학년" value={grade} onChangeText={setGrade} />
            <TextInput style={styles.smallInput} placeholder="반" value={room} onChangeText={setRoom} />
          </View>

          <TextInput style={styles.input} placeholder="이름" value={name} onChangeText={setName} />
        </View>

        <TouchableOpacity onPress={Next}>
          <Text style={styles.button}>다음</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  title: { 
    fontSize: 40, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 40 
  },
  main: { 
    marginHorizontal: 40 
  },
  input: {
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 15, 
    fontSize: 18, 
    marginBottom: 15,
  },
  smallcontainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  smallInput: {
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 15, 
    fontSize: 18, 
    width: '48%',
  },
  button: {
    backgroundColor: 'black', 
    color: 'white', 
    fontSize: 24, 
    fontWeight: 'bold',
    textAlign: 'center', 
    padding: 15, 
    borderRadius: 10, 
    marginHorizontal: 40,
  },
});

export default Login;