import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../themes/colors';

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/empty.png')}
        style={styles.image}
      />
      <Text style={styles.text1}>Nothing to show !!</Text>
      <Text style={styles.text2}>it's empty here you do not have any bugs</Text>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  text1: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.empty,
  },
  text2: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.empty,
  },
  image: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
});
