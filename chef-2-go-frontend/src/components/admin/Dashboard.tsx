import React from 'react'
import { ColorModeContext, useMode } from './theme'
import { Box, Button, IconButton, Typography, useTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { mockTransactions } from './data/mockData';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Topbar from './menu/Topbar';
import HeaderAdmin from './menu/HeaderAdmin';
import StatBox from './menu/StatBox';
import { tokens } from './theme';
const Header = HeaderAdmin;
const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className=''>
          <main className='flex justify-start'>
            <Topbar />
          </main>
          {/* <main className='content flex justify-between'>
            <SidebarAdmin />
        </main> */}
        </div>
        <Box m="20px">
          {/* HEADER */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to Chef-2-go dashboard" />

            <Box>
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                Download Reports
              </Button>
            </Box>
          </Box>

          {/* GRID & CHARTS */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            {/* ROW 1 */}
            <Box
              sx={{
                gridColumn: "span 3",
                backgroundColor: colors.primary[400],
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <StatBox
                title="12,361"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              sx={{
                gridColumn: "span 3",
                backgroundColor: colors.primary[400],
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <StatBox
                title="431,225"
                subtitle="Sales Obtained"
                progress="0.50"
                increase="+21%"
                icon={
                  <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Dashboard