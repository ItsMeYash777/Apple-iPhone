import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://2b7c99ce1df4bc2c06a84eb9f8740c72@o4507596445581312.ingest.us.sentry.io/4507596448530432",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,

    }),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
