var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  itemVariationNameContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemVariationName: {
    flex: 1,
    fontSize: 16,
    lineHeight: 16,
  },
  itemVariationBrandNameContainer: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'column',
  },
  itemVariationBrandName: {
    color: 'gray',
    flex: 1,
    fontSize: 16,
    lineHeight: 16,
  }
});

module.exports = styles;
