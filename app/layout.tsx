"use client";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyle, theme } from "style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <GlobalStyle />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
