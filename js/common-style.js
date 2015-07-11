var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    height: 51,
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    // backgroundColor: '#CCCCCC',
    backgroundColor: '#F1F1F1',
  },
});

module.exports = styles;
