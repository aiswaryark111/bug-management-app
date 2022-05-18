import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../themes/colors';
const Bug = (props: any) => {
  const {value, bug} = props;
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: value ? COLORS.primary : '',
      }}>
      <View style={{flexDirection: 'row'}}>
        <MaterialCommunityIcons name="bug" size={30} color={COLORS.black} />
        <Text style={styles.title}>{bug.bugId}</Text>
      </View>
      <View style={styles.section}>
        <View>
          <Text style={styles.subTitle}>Description </Text>
          <Text style={styles.description}>{bug.description}</Text>
        </View>
        {bug.isActive ? (
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: value ? COLORS.white : COLORS.primary,
            }}>
            <Text
              style={{
                color: value ? COLORS.primary : COLORS.white,
                fontWeight: 'bold',
              }}>
              Resolve
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              backgroundColor: value ? COLORS.white : COLORS.primary,
              ...styles.badge,
            }}>
            <MaterialCommunityIcons
              name="check-bold"
              size={15}
              color={value ? COLORS.primary : COLORS.white}
            />
            <Text
              style={{
                color: value ? COLORS.primary : COLORS.white,
                ...styles.badgeLabel,
              }}>
              Resolved
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 10,
    width: '90%',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 125,
    borderColor: '#FFB37E',
    marginTop: 20,
  },
  badge: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 8,
    height: 30,
    alignItems: 'center',
    right: 10,
    width: 80,
  },
  badgeLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 5,
    left: 3,
  },
  fixToText: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
    paddingLeft: 10,
  },
  button: {
    borderRadius: 8,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    right: 10,
    width: 80,
    borderColor: COLORS.white,

    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.black,
  },
  subTitle: {
    fontSize: 13,
    left: 5,
    fontWeight: '500',
    color: COLORS.black,
  },
  description: {
    top: 5,
    left: 5,
    fontSize: 12,
    color: COLORS.black,
  },
});
export default Bug;
