var React = require('react-native');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var styles = require('./style.js');

var ItemVariationDetails = require('../ItemVariationDetails');

var {
  ListView,
  TouchableHighlight,
  Text,
  View
} = React;

// Parse Objects
var Item = Parse.Object.extend('Item');

var ItemVariationsList = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function (props, state) {
    var itemObject = new Item();
    itemObject.id = props.item.objectId;
    
    return {
      items: (new Parse.Query('ItemVariation')).equalTo('item', itemObject).include('brand')
    }
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

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Text>{rowData.name}</Text>
            <Text>{rowData.brand.name}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  _pressRow: function(rowID: number) {
    this.props.navigator.push({
      title: this.data.items[rowID].name,
      component: ItemVariationDetails,
      passProps: {item: this.data.items[rowID]}
    });
  },
});

module.exports = ItemVariationsList;
