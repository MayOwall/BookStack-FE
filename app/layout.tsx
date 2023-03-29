"use client";
import "style/reset.css";
import "style/global.css";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "style/theme";

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
      <body>
        <ThemeProvider theme={theme}>
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
