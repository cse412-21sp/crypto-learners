const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class BtcToGold1Yanni extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markArea({ color: 'lightblue' })
        .encode(
          vl.x().timeYMD('Date'),
          vl.y().fieldQ('Bitcoin Currency').title('Bitcoin Currency (Billion)'),
          vl.tooltip('Bitcoin Currency')
        )
        .title('How does price of Bitcoin compare to SPDR Gold Shares?')
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = BtcToGold1Yanni;
