import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Bug from '../../components/bug/bug';

const Home = () => {
  const data = [
    {bugId: 'Bug#1234', description: 'Inactive type', isActive: true},
    {bugId: 'Bug#5678', description: 'Missing semicolon', isActive: false},
    {bugId: 'Bug#1554', description: 'Missing attributes', isActive: true},
    {bugId: 'Bug#3334', description: 'Invalid synctax', isActive: true},
    {bugId: 'Bug#8834', description: 'Improper Alignment', isActive: false},
    {bugId: 'Bug#1234', description: 'Inactive type', isActive: true},
    {bugId: 'Bug#5678', description: 'Missing semicolon', isActive: false},
    {bugId: 'Bug#1554', description: 'Missing attributes', isActive: true},
    {bugId: 'Bug#3334', description: 'Invalid synctax', isActive: true},
    {bugId: 'Bug#8834', description: 'Improper Alignment', isActive: false},
  ];
  return (
    <ScrollView>
      <View style={style.view}>
        {data.map((bug, index) => {
          return <Bug key={index} bug={bug} index={index} />;
        })}
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  view: {flex: 1, marginHorizontal: 20},
});
export default Home;
