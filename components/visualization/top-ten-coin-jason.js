const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class TopTenCoinJason extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markBar()
        .encode(
          vl.x().field('% Change (24h)'),
          vl.y().field('Name'),
          vl.tooltip(['Price', 'Market Cap'])
        )
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = TopTenCoinJason;
