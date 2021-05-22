const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class HighToLowRoger extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markCircle({ filled: true, color: 'teal' })
        .encode(
          vl.x().timeYMD('Date'),
          vl.y().fieldQ('High'),
          vl.tooltip('High')
        )
        .title('Bitcoin: High vs Low Prices')
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = HighToLowRoger;
