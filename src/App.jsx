import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Offer from './Components/Offer'
import { ThemeProvider, createTheme } from '@mui/material'

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Montserrat", "sans-serif"',
      fontSize: "2rem",
    },
  });
  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <Banner/>
        <Offer/>
    </ThemeProvider>
  )
}

export default App