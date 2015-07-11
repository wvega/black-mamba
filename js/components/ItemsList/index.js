var React = require('react-native');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var commonStyles = require('../../common-style.js');
var styles = require('./style.js');

var ItemVariationsList = require('../ItemVariationsList');

var {
  ListView,
  TouchableHighlight,
  Text,
  View
} = React;

var ItemsList = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      items: (new Parse.Query('Item')).ascending('createdAt')
    };
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows([]),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  render: function() {
    if (this.data.items.length > 0) {
      content = (<ListView dataSource={this._fillData()} renderRow={this._renderRow} />);
    } else {
      content = (<View><Text>There are no items to show</Text></View>);
    }
    
    return (
      <View style={styles.container}>
        <View
          style={styles.wrapper}>
            {content}
        </View>
      </View>
    );
  },

  _fillData: function () {
    return this.state.dataSource.cloneWithRows(this.data.items);
  },

  _renderRow: function(rowData: object, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={[commonStyles.row, styles.row]}>
            <Text style={styles.itemName}>{rowData.name}</Text>
          </View>
          <View style={commonStyles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  _pressRow: function(rowID: number) {
    this.props.navigator.push({
      title: this.data.items[rowID].name,
      component: ItemVariationsList,
      passProps: {item: this.data.items[rowID]}
    });
  },
});

module.exports = ItemsList;
