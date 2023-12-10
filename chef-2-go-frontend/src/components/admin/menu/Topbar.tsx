import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';


const Topbar: React.FC = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" 
            backgroundColor={colors.primary[400]} 
            borderRadius="3px" >

            </Box>
            <IconButton sx={{display:"flex"}}></IconButton>
        </Box>
    );
};

export default Topbar;