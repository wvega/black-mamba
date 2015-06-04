var React = require('react-native');

var styles = require('./style.js');

var {
  AppRegistry,
  Text,
  View,
  ListView,
} = React;

var ItemVariationDetails = React.createClass({
  propTypes: {
    itemVariation: React.PropTypes.object.isRequired,
  },

  getInitialState: function () {
      var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      return {
          dataSource: dataSource.cloneWithRows([
            {
              name: 'Mercados Madrid',
              price: 6500,
              date: new Date(2015, 5, 16, 16, 34, 12),
            },
            {
              name: 'De1 (San Juan)',
              price: 6800,
              date: new Date(2015, 10, 16, 16, 34, 12),
            },
            {
              name: 'De1 (San Juan)',
              price: 6800,
              date: new Date(2015, 10, 16, 16, 34, 12),
            },
            {
              name: 'De1 (San Juan)',
              price: 6800,
              date: new Date(2015, 10, 16, 16, 34, 12),
            },
            {
              name: 'De1 (San Juan)',
              price: 6800,
              date: new Date(2015, 10, 16, 16, 34, 12),
            },
            {
              name: 'De1 (San Juan)',
              price: 6800,
              date: new Date(2015, 10, 16, 16, 34, 12),
            },
            {
              name: 'De1 (San Juan)',
              price: 6800,
              date: new Date(2015, 10, 16, 16, 34, 12),
            },
            {
              name: 'De1 (San Juan)',
              price: 6800,
              date: new Date(2015, 10, 16, 16, 34, 12),
            }
          ])
      };
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
          <ListView
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.dataSource}
            renderRow={(row) =>
              <View>
                <View>
                  <Text>{row.name}</Text><Text>{row.price}</Text>
                </View>
                <Text>{row.date}</Text>
              </View>} />
        </View>
      </View>
    );
  }
});

module.exports = ItemVariationDetails;
