'use strict';

var React = require('react-native');

var ItemsList = require('./js/components/ItemsList');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Navigator
} = React;

var BlackMamba = React.createClass({
  _onRowClick: function () {
    this.props.navigator.push({
      sceneConfig: Navigator.SceneConfigs.FloatFromRight,
    });
  },

  render: function() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          component: ItemsList,
          title: 'BlackMamba',
          rightButtonTitle: 'Add',
          passPros: {onRowClick: this._onRowClick}
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('BlackMamba', () => BlackMamba);
