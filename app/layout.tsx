"use client";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyle, lightMode, darkMode } from "style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLightMode, setLightMode] = useState(true);
  return (
    <html lang="ko">
      <head>
        <GlobalStyle />
      </head>
      <body>
        <ThemeProvider theme={isLightMode ? lightMode : darkMode}>
          <div
            style={{
              backgroundColor: isLightMode
                ? lightMode.color[1]
                : darkMode.color[1],
            }}
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
