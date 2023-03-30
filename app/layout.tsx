"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyle, theme } from "style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    const isLogged = !!localStorage.getItem("isLogged");
    if (pathname === "/" || pathname === "/login") {
      isLogged && router.push("/stack");
    } else {
      !isLogged && router.push("/");
    }
  }, []);

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
