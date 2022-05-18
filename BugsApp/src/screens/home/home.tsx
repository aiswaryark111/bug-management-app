import React from 'react';
import {ScrollView, View} from 'react-native';
import Bug from '../../components/bug/bug';

const Home = () => {
  let odd;
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
      <View style={{backgroundColor: '#ffff', height: '100%'}}>
        {data.map((bug, index) => {
          if (index % 2 === 0) {
            odd = false;
          } else {
            odd = true;
          }
          return <Bug key={index} value={odd} bug={bug} />;
        })}
      </View>
    </ScrollView>
  );
};
export default Home;
