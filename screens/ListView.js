import React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import styles from './StlyeCommon';

let constNavigation = null;

const DATA = [
  {
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'V sharma',
    email: 'vsharma@deqode.com',
  },
  {
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'N Agrawal',
    email: 'nagrawal@deqode.com',
  },
  {
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'A Patil',
    email: 'apatil@deqode.com',
  },
];
const onPressListItem = (item) => {
  constNavigation.navigate('DetailView', {data: item});
};
const renderItem = ({item}) => (
  <View>
    <TouchableOpacity
      style={styles.userCell}
      onPress={() => onPressListItem(item)}>
      <View style={styles.userCell}>
        <Image
          style={styles.userImage}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.textStyle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.divider} />
  </View>
);

const ListView = ({navigation}) => {
  constNavigation = navigation;
  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
};

export default ListView;
