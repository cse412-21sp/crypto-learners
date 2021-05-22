const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class EtcJoohoon extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markLine({ color: 'firebrick' })
        .encode(
          vl.x().timeYMD('Date'),
          vl.y().fieldQ('High'),
          vl.tooltip('High')
        )
        .title('Ethereum Classic: High Prices')
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = EtcJoohoon;
