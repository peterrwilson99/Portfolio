import React, { useState, useEffect, useContext, createContext } from "react";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import Footer from "../src/components/Footer";
import { lightTheme, darkTheme } from "../src/theme";
import "../src/globals.css";
import Navigation from "../src/components/Navigation";
import { Analytics } from "@vercel/analytics/react";

const ThemeContext = createContext({ theme: {} });
export const useMyTheme = () => useContext(ThemeContext);

export default function MyApp(props) {
    const [myTheme, setMyTheme] = useState(createTheme(darkTheme));
    const [theme, setTheme] = useState(createTheme(darkTheme));
    useEffect(() => {
        setTheme(createTheme(myTheme));
    }, [myTheme]);

    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <ThemeContext.Provider value={{ theme, setMyTheme }}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title>Peter Wilson</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navigation />
                    <Component {...pageProps} />
                    <Footer />
                </ThemeProvider>
            </CacheProvider>
            <Analytics />
        </ThemeContext.Provider>
    );
}
