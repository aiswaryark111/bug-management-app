import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../themes/colors';

const Login = () => {
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
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.primary}
        />
        <TextInput
          style={styles.textInput}
          label="Password"
          mode="outlined"
          secureTextEntry={true}
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.primary}
        />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Not a member ? </Text>
          <TouchableOpacity>
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
