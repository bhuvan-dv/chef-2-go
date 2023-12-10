import React from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './menu/Topbar';
import SidebarAdmin from './menu/SidebarAdmin';
const Dashboard = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <div className=''>
        <main className='flex justify-end'>
            <Topbar />
        </main>
        <main className='content flex justify-between'>
            <SidebarAdmin />
        </main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Dashboard