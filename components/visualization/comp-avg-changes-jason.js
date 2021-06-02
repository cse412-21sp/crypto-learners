const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class CompAvgChangesJason extends IdyllVegaLite {
  render() {
    const topCrypto = vl
      .markPoint()
      .encode(
        vl.x().field('% Change (24h)'),
        vl.y().field('Name'),
        vl.tooltip(['Price', 'Market Cap'])
      );

    const average = vl
      .markPoint({ filled: true, color: 'firebrick' })
      .encode(
        vl.x().average('% Change (24h)'),
        vl.y().field('Name'),
        vl.tooltip(['Price', 'Market Cap'])
      );

    this.props = {
      spec: vl
        .layer(topCrypto, average)
        .title('Comparisons To Average Changes')
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = CompAvgChangesJason;
