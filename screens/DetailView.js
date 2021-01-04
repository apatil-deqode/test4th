import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import styles from './StlyeCommon';

const DetailView = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <View style={[styles.container, styles.userProfile]}>
      <Image
        style={[styles.userImage, styles.borderImage, {marginTop: 50}]}
        source={{
          uri: data.image,
        }}
      />
      <Text style={[styles.textStyle, {color: 'white', marginTop: 20}]}>
        {data.name}
      </Text>
    </View>
  );
};
export default DetailView;
