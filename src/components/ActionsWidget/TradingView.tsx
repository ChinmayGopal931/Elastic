import React, { useEffect } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

const TradingViewWidget: React.FC = () => {
  useEffect(() => {
    // This script element embeds TradingView's library if it's not already loaded
    if (!window.TradingView) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;

      // Initialize the widget once the script is loaded
      script.onload = () => initTradingView();

      document.body.appendChild(script);
    } else {
      // If the library is already loaded, initialize the widget directly
      initTradingView();
    }

    function initTradingView() {
      new window.TradingView.widget({
        // Widget configuration
        autosize: true,
        symbol: 'BTCUSD',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '10',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: 'tradingview_btcusd',
      });
    }
  }, []);

  return <div id="tradingview_btcusd" style={{ width: '100vh', height: '80vh' }} />;
};

export default TradingViewWidget;
