var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  storeNamePurchasePriceContainer: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  storeName: {
    color: '#111',
  },
  purchasePrice: {
    color: '#111',
  },
  purchaseDateContainer: {
    paddingVertical: 2,
  },
  purchaseDate: {
    color: 'gray',
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#F1F1F1',
  }
});

module.exports = styles;
