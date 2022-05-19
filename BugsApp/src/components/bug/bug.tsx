import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../themes/colors';
const Bug = (props: any) => {
  const {index, bug} = props;
  const [value, setValue] = useState(false);

  const checkOdd = () => {
    if (index % 2 === 0) {
      setValue(false);
    } else {
      setValue(true);
    }
  };

  useEffect(() => {
    checkOdd();
  }, [index]);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: value ? COLORS.color1 : COLORS.color2,
      }}>
      <View style={styles.titleContainer}>
        <MaterialCommunityIcons name="bug" size={30} color={COLORS.black} />
        <Text style={styles.title}>{bug.bugId}</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.subTitle}>Description </Text>
          <Text style={styles.description}>{bug.description}</Text>
        </View>

        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: bug.isActive ? COLORS.primary : COLORS.white,
            opacity: bug.isActive ? 1 : 0.5,
          }}
          disabled={!bug.isActive}>
          <Text
            style={{
              ...styles.textFont,
              color: bug.isActive ? COLORS.white : COLORS.black,
            }}>
            {bug.isActive ? (
              <>Resolve</>
            ) : (
              <>
                <MaterialCommunityIcons
                  name="check-bold"
                  size={15}
                  color={value ? COLORS.black : COLORS.black}
                />{' '}
                Resolved
              </>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 125,
    borderColor: COLORS.white,
    marginTop: 20,
    padding: 12,
  },
  textFont: {
    fontWeight: '500',
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
  },
  button: {
    borderRadius: 8,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    borderColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.black,
  },
  subTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.black,
  },
  description: {
    fontSize: 12,
    color: COLORS.black,
  },
  titleContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },
  descriptionContainer: {
    flex: 0.7,
    paddingRight: 20,
    paddingLeft: 10,
  },
});
export default Bug;
