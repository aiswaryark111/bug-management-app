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
import {user} from '../../store/entity/userDetails';
// import {login} from '../../store/entity/user';
import {COLORS} from '../../themes/colors';

type props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const SignUp = ({navigation}: props) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    userName: '',
    userEmail: '',
    designation: '',
    password: '',
    confirmPassword: '',
  });

  const onHandleChange = (value: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: value}));
  };

  const onClick = () => {
    dispatch(user(inputs));
    setInputs({
      userName: '',
      userEmail: '',
      designation: '',
      password: '',
      confirmPassword: '',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="bullseye-arrow"
          size={70}
          color={COLORS.white}
          style={styles.icon}
        />
      </View>
      <ScrollView style={styles.loginContainer}>
        <View style={styles.loginHeaderContainer}>
          {/* <Text style={styles.heading}>Hello!</Text> */}
          <Text style={styles.heading}>Sign Up Now</Text>
        </View>
        <TextInput
          style={styles.textInput}
          label="UserName"
          mode="outlined"
          value={inputs.userName}
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.primary}
          onChangeText={input => onHandleChange(input, 'userName')}
        />
        <TextInput
          style={styles.textInput}
          label="Email"
          mode="outlined"
          value={inputs.userEmail}
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.primary}
          onChangeText={input => onHandleChange(input, 'userEmail')}
        />
        <TextInput
          style={styles.textInput}
          label="Designation"
          mode="outlined"
          value={inputs.designation}
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.primary}
          onChangeText={input => onHandleChange(input, 'designation')}
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
        <TextInput
          style={styles.textInput}
          label="Confirm Password"
          mode="outlined"
          value={inputs.confirmPassword}
          secureTextEntry={true}
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.primary}
          onChangeText={input => onHandleChange(input, 'confirmPassword')}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={() => onClick()}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Already a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signUpBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 100,
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    // top: 30,
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
