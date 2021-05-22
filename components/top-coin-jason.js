const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class TopCoinJason extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markBar({ filled: true, color: 'lightblue' })
        .encode(
          vl.color().value('teal'),
          vl.x().fieldO('Name'),
          vl.y().fieldQ('Price'),
          vl.tooltip('Market Cap')
        )
        .title('Prices of Crypto Currencies')
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = TopCoinJason;
