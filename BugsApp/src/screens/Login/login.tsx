import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
          color={COLORS.primary}
          style={styles.icon}
        />
      </View>
      <View>
        <Text style={styles.heading}>Hello!</Text>
        <Text style={styles.heading}>Login Now</Text>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Not a member ? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          label="Email"
          mode="outlined"
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.tabColor}
        />
        <TextInput
          style={styles.textInput}
          label="Password"
          mode="outlined"
          secureTextEntry={true}
          theme={{roundness: 20}}
          activeOutlineColor={COLORS.tabColor}
        />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.tabColor,
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
    top: 10,
    left: 20,
    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.tabColor,
  },
  text: {
    color: COLORS.tabColor,
    fontSize: 16,
  },
  signUpBtn: {
    fontSize: 16,
    color: 'red',
  },
  subContainer: {
    top: 20,
    left: 20,
    marginBottom: 15,
    flexDirection: 'row',
  },
  textInput: {
    marginTop: 15,
    borderRadius: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  loginBtn: {
    alignContent: 'center',
    marginTop: 18,
    width: '90%',
    borderRadius: 25,
    height: 50,
    marginLeft: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9802D',
  },
});
