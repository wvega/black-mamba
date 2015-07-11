var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  content: {
    alignSelf: 'center',
    color: '#777',
    fontSize: 18,
  }
});

module.exports = styles;
