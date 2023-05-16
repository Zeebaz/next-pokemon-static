import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import * as themes from "@/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={themes.darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
