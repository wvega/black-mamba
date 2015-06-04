var React = require('react-native');

var ItemVariationDetails = require('../ItemVariationDetails');

var styles = require('./style.js');

var {
  ListView,
  TouchableHighlight,
  Text,
  View
} = React;

var ItemVariationsList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View
          style={styles.wrapper}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />
        </View>
      </View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Text>{rowData}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 10; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});

    this.props.navigator.push({
      title: 'Item Variation Details',
      component: ItemVariationDetails,
      passProps: {
        itemVariation: {
          name: 'Suavitel Fast Dry',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum fermentum lorem vitae pharetra. Nam sollicitudin, massa finibus tincidunt rhoncus, elit nunc cursus lorem, a blandit nulla felis vel magna.',
          presentationAmount: 1000,
          presentationUnit: 'ml',
          brand: {
            name: 'Suavitel'
          }
        }
      }
    });
  },
});

module.exports = ItemVariationsList;
