import {StyleSheet} from 'react-native';

const StlyeCommon = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    marginLeft: 20,
    alignSelf: 'center',
  },
  userImage: {
    height: 80,
    width: 80,
    backgroundColor: 'red',
    borderRadius: 80 / 2,
  },
  userCell: {
    flexDirection: 'row',
    padding: 10,
  },
  divider: {
    height: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: '#D3D3D3',
  },
  userProfile: {
    alignItems: 'center',
    backgroundColor: '#243744',
  },
  borderImage: {
    borderColor: '#06b894',
    borderWidth: 2,
  },
});

export default StlyeCommon;
