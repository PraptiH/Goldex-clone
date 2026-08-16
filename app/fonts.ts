import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi_Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Satoshi_Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Satoshi_Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/Satoshi_Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-satoshi",
});