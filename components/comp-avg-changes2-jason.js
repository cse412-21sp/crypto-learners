const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class CompAvgChanges2Jason extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markPoint({ filled: true, color: 'firebrick' })
        .encode(
          vl.x().average('% Change (24h)'),
          vl.y().field('Name'),
          vl.tooltip(['Price', 'Market Cap'])
        )
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = CompAvgChanges2Jason;
