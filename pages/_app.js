import React from 'react'
import styles from '../styles/global.css' // lokasi & nama file global css bebas

// Flobal css only can be imported in here.
// This App component is the top-level component which  will be common
// across all the different pages. You can use this App component to keep
// state when navigating between pages
// * If it didn’t work: Make sure you restart the development server when you add pages/_app.js.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
