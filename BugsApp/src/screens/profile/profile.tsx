import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/entity/user';
import styles from '../../themes/styles';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>User Profile!</Text>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
