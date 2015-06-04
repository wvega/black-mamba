var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    backgroundColor: '#004693',
    padding: 10,
    paddingTop: 55,
  },
  nameContainer: {
    marginBottom: 15,
  },
  name: {
    color: 'white',
    fontSize: 22,
  },
  brandName: {
    color: '#BBB',
  },
  description: {
    color: 'white',
    marginBottom: 10,
    textAlign: 'auto',
  },
  presentation: {
    color: 'white',
    marginRight: 20,
    textAlign: 'right',
  },
  purchasesListContainer: {
    backgroundColor: 'red',
    flex: 1,
  }
});

module.exports = styles;
