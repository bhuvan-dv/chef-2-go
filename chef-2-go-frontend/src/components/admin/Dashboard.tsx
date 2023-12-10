import React from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
const Dashboard = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <div>
        <main className='content'></main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Dashboard