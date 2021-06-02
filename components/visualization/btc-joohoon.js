const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class BtcJoohoon extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markLine({ color: 'teal' })
        .encode(
          vl.x().timeYMD('Date'),
          vl.y().fieldQ('norm'),
          vl.tooltip('norm')
        )
        .title('Bitcoin: Normalized Difference between High and Low')
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = BtcJoohoon;
