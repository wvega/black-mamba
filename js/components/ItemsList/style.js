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
    paddingHorizontal: 10
  },
  itemName: {
    flex: 1,
    fontFamily: 'Helvetica',
    fontSize: 18,
    lineHeight: 18,
  }
});

module.exports = styles;
