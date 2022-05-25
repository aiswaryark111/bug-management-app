import React from 'react';
// import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/entity/user';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../themes/colors';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../assets/images/profile_pic.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>John Luther</Text>
          <Text style={styles.designationText}>Associate Manager</Text>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => dispatch(logout())}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 0.8,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  textContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  designationText: {
    color: COLORS.black,
    fontWeight: '400',
    fontSize: 16,
  },
  logoutContainer: {
    flex: 0.2,
    marginHorizontal: 30,
    justifyContent: 'flex-end',
  },
  logoutBtn: {
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  logoutText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
