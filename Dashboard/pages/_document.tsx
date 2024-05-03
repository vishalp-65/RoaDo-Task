import { Html, Head, Main, NextScript } from "next/document";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-blue-50">
                <AppRouterCacheProvider>
                    <Main />
                    <NextScript />
                </AppRouterCacheProvider>
            </body>
        </Html>
    );
}
