const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class BtcJoohoon extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markLine({ color: 'green' })
        .encode(
          vl.x().timeYMD('Date'),
          vl.y().fieldQ('High'),
          vl.tooltip('High')
        )
        .title('Dogecoin: High Prices')
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = BtcJoohoon;
