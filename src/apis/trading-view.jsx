import React, { useEffect, useRef } from 'react';

const TradingViewWidget = ({ symbol }) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current.firstChild) {
      widgetRef.current.removeChild(widgetRef.current.firstChild);
    }
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget(
        {
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
          // You can add more settings here. Check the documentation for more options.
        }
      );
    };
    widgetRef.current.appendChild(script);
  }, [symbol]); // Re-run the effect if the 'symbol' prop changes

  return <div ref={widgetRef} id={widgetRef.current} />;
};

export default TradingViewWidget;

// TradingViewWidget.jsx
// import React, { useEffect, useRef, memo } from 'react';

// function TradingViewWidget() {
//   const container = useRef(null);

//   useEffect(
//     () => {
//       if (container.current.firstChild) {
//         container.current.removeChild(container.current.firstChild);
//       }
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "autosize": true,
//           "symbol": "BINANCE:BTCUSDT",
//           "interval": "D",
//           "timezone": "Etc/UTC",
//           "theme": "dark",
//           "style": "1",
//           "locale": "en",
//           "enable_publishing": false,
//           "allow_symbol_change": true,
//           "calendar": false,
//           "support_host": "https://www.tradingview.com"
//         }`;
//       container.current.appendChild(script);
//     },[]
//   );

//   return (
//     <div ref={container} id={container.current} />
//     // <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
//     //   <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
//     //   <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
//     // </div>
//   );
// }

// export default memo(TradingViewWidget);
