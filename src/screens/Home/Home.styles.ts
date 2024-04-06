import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  container: {
    marginVertical: Platform.OS === 'ios' ? 50 : 30,
  },
  header: {
    marginVertical: 10,
  },
});
