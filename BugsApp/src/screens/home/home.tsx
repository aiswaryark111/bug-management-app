import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import Bug from '../../components/bug/bugCard';
import EmptyScreen from '../../components/bug/empty-screen';
import {recentBugsSelector} from '../../store/entity/bugs';

const Home = () => {
  const data = useSelector(recentBugsSelector);
  return (
    <>
      {data.length ? (
        <ScrollView>
          <View style={style.view}>
            {data.map((bug: any, index: any) => {
              return <Bug key={index} bug={bug} index={index} />;
            })}
          </View>
        </ScrollView>
      ) : (
        <EmptyScreen />
      )}
    </>
  );
};
const style = StyleSheet.create({
  view: {flex: 1, marginHorizontal: 20, marginVertical: 20},
});
export default Home;
