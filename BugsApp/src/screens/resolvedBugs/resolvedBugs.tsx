import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import Bug from '../../components/bug/bugCard';
import EmptyScreen from '../../components/bug/empty-screen';
import {resolvedBugSelector} from '../../store/entity/bugs';

const ResolvedBugs = () => {
  const resolved = useSelector(resolvedBugSelector);

  return (
    <>
      {resolved.length ? (
        <ScrollView>
          <View style={styles.container}>
            {resolved.map((bug: any, index: any) => {
              return <Bug key={index} index={index} bug={bug} />;
            })}
          </View>
        </ScrollView>
      ) : (
        <>
          <EmptyScreen />
        </>
      )}
    </>
  );
};

export default ResolvedBugs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
