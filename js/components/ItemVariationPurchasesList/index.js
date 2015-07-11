var React = require('react-native');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var moment = require('moment')

var EmptyList = require('../EmptyList');

var styles = require('./style.js');

var {
  Text,
  View,
  ListView,
} = React;

var ItemVariation = Parse.Object.extend('ItemVariation');

var ItemVariationPurchasesList = React.createClass({
  mixins: [ParseReact.Mixin],

  propTypes: {
    itemVariation: React.PropTypes.object.isRequired,
  },

  observe: function(props, state) {
    var itemVariationOject = new ItemVariation();

    itemVariationOject.id = props.itemVariation.objectId;

    return {
      purchases: (new Parse.Query('ItemVariationPurchase')).equalTo('itemVariation', itemVariationOject).include('store')
    }
  },

  getInitialState: function () {
      var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      return {
          dataSource: dataSource.cloneWithRows([])
      };
  },

  render () {
    if (this.data.purchases.length > 0) {
      content = (
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this._fillData()}
          renderRow={this._renderRow} />
      );
    } else {
      content = (<EmptyList content="There is no information to show."/>);
    }

    return content;
  },

  _fillData: function() {
    return this.state.dataSource.cloneWithRows(this.data.purchases);
  },

  _renderRow: function(rowData: object, sectionID: number, rowID: number) {
    console.log(rowData);
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.storeNamePurchasePriceContainer}>
            <View><Text style={styles.storeName}>{rowData.store.name}</Text></View>
            <View><Text style={styles.purchasePrice}>{rowData.price}</Text></View>
          </View>
          <View style={styles.purchaseDateContainer}>
            <Text style={styles.purchaseDate}>{moment(rowData.date).fromNow()}</Text>
          </View>
        </View>
        <View style={styles.separator}></View>
      </View>
    );
  }
});

module.exports = ItemVariationPurchasesList;
