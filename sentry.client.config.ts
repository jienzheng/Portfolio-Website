import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://80d93e32114214713f0900a3f9cf52f8@o4510156144705536.ingest.us.sentry.io/4510156186648576",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
   // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysSessionSampleRate: 0.1,
  // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  replaysOnErrorSampleRate: 1.0, 
});