import { isProduction } from 'lib/constants/enviroment';
import ReactGA from 'react-ga4';

/* Initialize Analytics */
ReactGA.initialize([
  {
    // GA4 Measurement Id
    trackingId: isProduction
      ? import.meta.env.VITE_GA4_PROD_ID
      : import.meta.env.VITE_GA4_TESTNET_ID,
  },
]);
