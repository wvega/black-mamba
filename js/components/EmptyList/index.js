var React = require('react-native');

var styles = require('./style.js');

var {
  Text,
  View
} = React;

var EmptyList = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{this.props.content}</Text>
      </View>
    );
  }
});

module.exports = EmptyList;
