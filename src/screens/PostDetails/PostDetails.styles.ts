import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollViewContainer: {
    marginHorizontal: 16,
  },
  container: {marginVertical: Platform.OS === 'ios' ? 50 : 30},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cardBodyContainer: {
    marginHorizontal: 10,
  },
  cardTitle: {
    width: 250,
    marginBottom: 10,
    marginTop: 5,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  separator: {
    width: '100%',
    borderWidth: 0.5,
    marginVertical: 10,
    borderColor: '@primaryButtonBorder',
    marginBottom: 20,
  },
  postContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderColor: '@primaryCardBackground',
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 15,
  },
  commentTitle: {marginBottom: 20},
});
