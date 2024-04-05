import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderWidth: 0.2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  smallAvatar: {width: 50, height: 50, borderRadius: 25},
  cardBodyContainer: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  cardTitle: {
    width: 250,
    marginTop: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});
