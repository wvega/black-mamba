var React = require('react-native');

var ItemVariationPurchasesList = require('../ItemVariationPurchasesList');

var styles = require('./style.js');

var {
  AppRegistry,
  Text,
  View
} = React;

var ItemVariationDetails = React.createClass({
  propTypes: {
    itemVariation: React.PropTypes.object.isRequired,
  },

  render () {
    return (
      <View style={[styles.container, this.props.styles]}>
        <View style={styles.detailsContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{this.props.itemVariation.name}</Text>
            <Text style={styles.brandName}>{this.props.itemVariation.brand.name}</Text>
          </View>
          <Text style={styles.description}>{this.props.itemVariation.description}</Text>
          <Text style={styles.presentation}>{this.props.itemVariation.presentationAmount} {this.props.itemVariation.presentationUnit}</Text>
        </View>
        <View style={styles.purchasesListContainer}>
          <ItemVariationPurchasesList {...this.props} />
        </View>
      </View>
    );
  }
});

module.exports = ItemVariationDetails;
