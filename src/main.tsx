// App
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import useDarkMode from 'hooks/useDarkMode';

// App Providers
import { BrowserRouter } from 'react-router-dom';
import 'lib/clients/sentry';
import 'lib/clients/i18n';
import 'lib/clients/ReactGA';

// Web3 Providers
import { reactQueryClient } from 'lib/clients/react-query';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit';
import { rainbowKitTheme } from 'lib/clients/rainbow-kit';
import { chains, wagmiClient } from 'lib/clients/wagmi';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Components
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

// Styles
import './index.css';

const Main = () => {
  const [isDarkMode] = useDarkMode();

  return (
    <React.StrictMode>
      <QueryClientProvider client={reactQueryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
              chains={chains}
              theme={
                !isDarkMode
                  ? ((rainbowKitTheme as { lightMode: Theme }).lightMode as Theme)
                  : ((rainbowKitTheme as { darkMode: Theme }).darkMode as Theme)
              }
            >
              <ScrollToTop />
              <App />
            </RainbowKitProvider>
          </WagmiConfig>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
