import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  pressableContainer: {
    marginVertical: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderWidth: 0.2,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  cardBodyContainer: {
    marginHorizontal: 10,
  },
  cardTitle: {
    width: 250,
    marginBottom: 10,
    marginTop: 5,
  },
  innerContainer: {flexDirection: 'row'},
  comments: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
