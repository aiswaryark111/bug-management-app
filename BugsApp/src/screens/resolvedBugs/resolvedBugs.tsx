import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EmptyScreen from '../../components/bug/empty-screen';

const ResolvedBugs = () => {
  const empty = true;
  return (
    <View style={styles.container}>
      {empty ? (
        <EmptyScreen />
      ) : (
        <>
          <Text>Resolved bugs!</Text>
        </>
      )}
    </View>
  );
};

export default ResolvedBugs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
