const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class TopCoin2Jason extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markBar({ filled: true })
        .transform(vl.filter('datum.Price > 50'))
        .encode(
          vl.color().value('teal'),
          vl.x().fieldO('Name'),
          vl.y().fieldQ('Price'),
          vl.tooltip('Market Cap')
        )
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = TopCoin2Jason;
