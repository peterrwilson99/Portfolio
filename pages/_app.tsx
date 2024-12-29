import React, { useState, useEffect, useContext, createContext } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import Footer from "../src/components/Footer";
import { darkTheme } from "../src/theme";
import "../src/globals.css";
import createEmotionCache from "../src/createEmotionCache";
import Navigation from "../src/components/Navigation";
import { Analytics } from "@vercel/analytics/react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ThemeContext = createContext({ theme: {} });
export const useMyTheme = () => useContext(ThemeContext);

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Peter Wilson</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={createTheme(darkTheme)}>
                <CssBaseline />
                <Navigation />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
            <Analytics />
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
