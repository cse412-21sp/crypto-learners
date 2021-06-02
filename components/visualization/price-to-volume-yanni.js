const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class PriceToVolumeYanni extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markPoint({ filled: true, color: 'orange' })
        .encode(
          vl.x().fieldQ('price').title('price (USD)'),
          vl.y().fieldQ('volume').title('trade volume (USD)'),
          vl.tooltip(['price', 'volume'])
        )
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = PriceToVolumeYanni;
