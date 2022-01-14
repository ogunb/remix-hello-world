import { Links, LiveReload, Outlet } from "remix";
import type { LinksFunction } from "remix";

import globalStyles from "./styles/global.css";
import globalLargeStyles from "./styles/global-large.css";
import globalMediumStyles from "./styles/global-medium.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles },
    {
      rel: "stylesheet",
      href: globalLargeStyles,
      media: "screen and (min-width: 1024px)",
    },
    {
      rel: "stylesheet",
      href: globalMediumStyles,
      media: "print, (min-width: 640px)",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Links />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
