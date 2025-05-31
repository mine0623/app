import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Alert 
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import type { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Pass'>;

function Pass({ route, navigation }: Props) {
  const { email, isNewUser } = route.params;
  const [password, setPassword] = useState('');

  const Next = async () => {
    if (!password) {
      Alert.alert('오류', '비밀번호를 입력하세요.');
      return;
    }

    try {
      if (isNewUser) {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('회원가입 완료');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('로그인 성공');
      }

    } catch (error: any) {
      Alert.alert('오류', error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>

        <Text style={styles.title}>{isNewUser ? '초기 비밀번호 설정' : '비밀번호 입력'}</Text>

        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="비밀번호를 입력하세요"
          autoCapitalize="none"
        />

        <TouchableOpacity onPress={Next}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Pass;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 40,
    marginTop: 100,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10, 
    padding: 20, 
    fontSize: 20,
    marginHorizontal: 40, 
    marginTop: 40,
  },
  button: {
    backgroundColor: 'black', 
    color: 'white', 
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center', 
    padding: 20, 
    borderRadius: 10, 
    marginHorizontal: 40, 
    marginTop: 20,
  },
});