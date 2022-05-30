import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {RootStackParamList} from '../../models/routeParamsList';
import {login} from '../../store/entity/user';
import {COLORS} from '../../themes/colors';

type props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
const Login = ({navigation}: props) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    userName: '',
    password: '',
  });

  const onHandleChange = (value: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: value}));
  };

  const onClick = () => {
    dispatch(login(inputs));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="bullseye-arrow"
          size={100}
          color={COLORS.white}
          style={styles.icon}
        />
      </View>
      <ScrollView style={styles.loginContainer}>
        <View style={styles.loginHeaderContainer}>
          <Text style={styles.heading}>Hello!</Text>
          <Text style={styles.heading}>Login Now</Text>
        </View>
        <TextInput
          style={styles.textInput}
          label="Email"
          mode="outlined"
          value={inputs.userName}
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.primary}
          onChangeText={input => onHandleChange(input, 'userName')}
        />
        <TextInput
          style={styles.textInput}
          label="Password"
          mode="outlined"
          value={inputs.password}
          secureTextEntry={true}
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.primary}
          onChangeText={input => onHandleChange(input, 'password')}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={() => onClick()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Not a member ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 100,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  text: {
    color: COLORS.primary,
    fontSize: 16,
  },
  signUpBtn: {
    fontSize: 16,
    color: COLORS.black,
  },
  subContainer: {
    top: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: 20,
  },
  loginBtn: {
    alignContent: 'center',
    borderRadius: 20,
    paddingVertical: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  loginContainer: {
    marginHorizontal: 20,
  },
  loginHeaderContainer: {
    marginVertical: 10,
  },
  loginText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
