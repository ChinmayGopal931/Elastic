import * as Sentry from '@sentry/react';
import { isProduction } from 'lib/constants/enviroment';
import { BrowserTracing } from '@sentry/tracing';

/* Initialize Sentry */
Sentry.init({
  dsn: isProduction ? import.meta.env.VITE_SENTRY_DSN_PROD : import.meta.env.VITE_SENTRY_DSN_DEV,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  environment: import.meta.env.VITE_NODE_ENV,
  integrations: [new BrowserTracing(), new Sentry.Replay()],
  tracesSampleRate: 1.0,
});
