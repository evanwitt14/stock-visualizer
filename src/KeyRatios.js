import React from 'react';
import './KeyRatios.css';

const KeyRatios = () => {
  const data = {
    analyst_estimates: {
      Citibank: 6.5,
      'Goldman Sachs': 7.9,
      'Morgan Stanley': 9.87,
      'J.P. Morgan': 8.1,
      'Lazard': 7.4
    },
    current_ratio: 7.1,
    debt_to_equity_ratio: 2.1,
    eps: 1.7,
    market_ap: 2.5,
    news: {
      article1: {
        sentiment: {
          score: 0.9,
          value: 'positive',
        },
        summary: 'This is Article1',
      },
      article2: {
        sentiment: {
          score: 0.67,
          value: 'negative',
        },
        summary: 'This is Article2',
      },
      article3: {
        sentiment: {
          score: 0.559,
          value: 'positive',
        },
        summary: 'This is Article3',
      },
    },
    pb_ratio: 7.9,
    pe_ratio: 1.2,
    peg_ratio: 5.5,
    ps_ratio: 33.5,
    shares_outstanding: 317,
    ticker: 'AAPL',
  };

  return React.createElement(
    'div',
    { className: 'key-ratios-container' },
    React.createElement('h1', null),
    React.createElement(
      'div',
      { className: 'key-ratios-columns' },
      React.createElement(
        'div',
        { className: 'key-ratios-column' },
        React.createElement('h2', null, 'Analyst Estimates'),
        React.createElement(
          'ul',
          null,
          Object.entries(data.analyst_estimates).map(([analyst, estimate]) =>
            React.createElement('li', { key: analyst }, `${analyst}: ${estimate}`)
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'key-ratios-column' },
        React.createElement('h2', null, 'Key Ratios'),
        React.createElement(
          'ul',
          null,
          React.createElement('li', null, `Current Ratio: ${data.current_ratio}`),
          React.createElement('li', null, `Debt to Equity Ratio: ${data.debt_to_equity_ratio}`),
          React.createElement('li', null, `EPS: ${data.eps}`),
          React.createElement('li', null, `Market AP: ${data.market_ap}`),
          React.createElement('li', null, `PB Ratio: ${data.pb_ratio}`),
          React.createElement('li', null, `PE Ratio: ${data.pe_ratio}`),
          React.createElement('li', null, `PEG Ratio: ${data.peg_ratio}`),
          React.createElement('li', null, `PS Ratio: ${data.ps_ratio}`),
          React.createElement('li', null, `Shares Outstanding: ${data.shares_outstanding}`)
        )
      ),
      React.createElement(
        'div',
        { className: 'key-ratios-column' },
        React.createElement('h2', null, 'News'),
        React.createElement(
          'ul',
          null,
          Object.entries(data.news).map(([article, details]) =>
            React.createElement(
              'li',
              { key: article },
              React.createElement('p', null, details.summary),
              React.createElement('p', null, `Sentiment: ${details.sentiment.value} (Score: ${details.sentiment.score})`)
            )
          )
        )
      )
    )
  );
};

export default KeyRatios;
