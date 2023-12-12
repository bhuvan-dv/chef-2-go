import { ReactElement } from "react";
import WomenCook from "../../components/loader/WomenCook";
import { Typography, Paper, Card } from '@mui/material';
const NotFound = (): ReactElement => {
    return (
        <div style={{ width: "100%" }}>
            <Paper elevation={3} sx={{ height: "75vh", width: "75vw", display: "flex", flexDirection: "column", margin: "5vh auto", flexBasis: "80%", bgcolor: "hsl(43, 21%, 94%)" }}>
                <WomenCook />
                <Paper elevation={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", bgcolor:"hsl(43, 21%, 94%)" }}>
                    <Typography variant="h2" color={"#38524f"}>What's Cooking Today?</Typography>
                    <Typography variant="h6" color={"#38524f"}>Page Not Found</Typography>
                </Paper>
            </Paper>
        </div>
    );
}

export default NotFound;