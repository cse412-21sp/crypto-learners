const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api');

class TimeToCountYanni extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl
        .markBar({ filled: true, color: 'lightblue' })
        .encode(vl.x().year('Time'), vl.y().count().title(null))
        .title('How are prices and trade volume of Bitcoin related?')
        .toSpec(),
      ...this.props,
    };

    return super.render();
  }
}

module.exports = TimeToCountYanni;
