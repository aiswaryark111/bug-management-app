import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EmptyScreen from '../../components/bug/empty-screen';

const UnresolvedBugs = () => {
  const empty = true;
  return (
    <View style={styles.container}>
      {empty ? (
        <EmptyScreen />
      ) : (
        <>
          <Text>Unresolved bugs!</Text>
        </>
      )}
    </View>
  );
};

export default UnresolvedBugs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
