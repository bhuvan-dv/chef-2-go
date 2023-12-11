import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IngredientsShop from '../../models/ingredientsShop';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
function createIng(
    id: string,
    ingName: string,
    stores: { name: string; location: string }[],
    // fat: number,
    // carbs: number,
    // protein: number,
) {
    const store = stores[0];
    const { name, location } = store;
    return { id, ingName, shopname: name, location };
}

type IngredientProps = {
    ingredients: IngredientsShop[] | undefined;
};
type RowIngredient = {
    id: string,
    ingName: string,
    shopname: string,
    location: string
}
const rows: RowIngredient[] = [];
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
export default function DenseTable(props: IngredientProps) {
    if (rows.length <= 0) {
        props?.ingredients?.forEach((ingObject) => {
            return rows.push(createIng(ingObject._id, ingObject.name, ingObject.stores));
        })
    }

    const handleBtnClick = (location: string) => () => {
        window.open(location, '_blank'); // Opens the URL in a new tab
    };


    // const [open, setOpen] = useState(false);
    // const [mapUrl, setMapUrl] = useState('');
    
    // function to handle maps for child modal
    // const handleBtnClick = (location: string) => {
    //     setMapUrl(location);
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    //     setMapUrl('');
    // };

    // function ChildModal() {
    //     const [open, setOpen] = React.useState(false);
    //     const handleOpen = () => {
    //         setOpen(true);
    //     };
    //     const handleClose = () => {
    //         setOpen(false);
    //     };

    //     return (
    //         <React.Fragment>
    //             <Button onClick={handleOpen}>Open Child Modal</Button>
    //             <Modal
    //                 open={open}
    //                 onClose={handleClose}
    //                 aria-labelledby="child-modal-title"
    //                 aria-describedby="child-modal-description"
    //             >
    //                 <Box sx={{ ...style, width: 200 }}>
    //                     <h2 id="child-modal-title">Text in a child modal</h2>
    //                     <p id="child-modal-description">
    //                         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //                     </p>
    //                     <Button onClick={handleClose}>Close Child Modal</Button>
    //                 </Box>
    //             </Modal>
    //         </React.Fragment>
    //     );
    // }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, bgcolor: 'secondary.light', border: '2px solid #38524f' }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ingridents</TableCell>
                            {/* <TableCell align="right">Ingredients</TableCell> */}
                            {/* <TableCell align="right">Logo(g)</TableCell> */}
                            <TableCell align="right">Retailers&nbsp;(g)</TableCell>
                            <TableCell align="right">Location&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.ingName}
                                </TableCell>
                                <TableCell align="right">{row.shopname}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="text"
                                        onClick={handleBtnClick(row.location)}
                                        sx={{ color: 'secondary.main', backgroundColor: 'hsl(43, 21%, 94%)' }}
                                    >
                                        View Map<FmdGoodIcon />
                                    </Button>
                                </TableCell>
                                {/* <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <ChildModal /> */}
            </>
        
    );
}