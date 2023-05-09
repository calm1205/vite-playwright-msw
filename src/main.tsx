import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { setupWorker } from "msw";
import { coffeeMock } from "./__mocks__/coffee.mock.ts";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const worker = setupWorker(coffeeMock);
worker.start();
// worker.start({ serviceWorker: { url: "" } });

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
