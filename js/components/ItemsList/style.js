var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  wrapper: {
    flex: 1,
  },
});

module.exports = styles;