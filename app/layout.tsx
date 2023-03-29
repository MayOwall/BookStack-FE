"use client";
import "style/reset.css";
import "style/global.css";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

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
        <div>{children}</div>
      </body>
    </html>
  );
}
