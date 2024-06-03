import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "height": "610",
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      backgroundColor: "rgba(242, 242, 242, 1)",
      gridColor: "rgba(0, 0, 0, 0.06)",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com"
    });

    script.onerror = (error) => {
      console.error('Error loading TradingView widget script:', error);
    };

    const currentContainer = container.current;
    currentContainer.appendChild(script);
    
    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = ''; 
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
