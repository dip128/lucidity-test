import { Fab, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { MyContext } from '../MyContext';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProductContextType } from '../types';

function ProductDetailsComp() {

    const { products, isUserMode } = React.useContext(MyContext) as ProductContextType;
    return (
        <div style={{ width: '90%', padding: '1em' }}>
            <TableContainer component={Paper} sx={{ color: "aliceblue", backgroundColor: '#282c34' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell ><div className='heading-style'>Name</div></TableCell>
                            <TableCell align="center"> <div className='heading-style'>Category</div> </TableCell>
                            <TableCell align="center"><div className='heading-style'>Price </div></TableCell>
                            <TableCell align="center"><div className='heading-style'>Quantity</div></TableCell>
                            <TableCell align="center"><div className='heading-style'>Value</div></TableCell>
                            <TableCell align="center"><div className='heading-style'>Actions</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((row, id) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ color: "aliceblue" }}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="center" sx={{ color: "aliceblue" }} >{row.category}</TableCell>
                                <TableCell align="center" sx={{ color: "aliceblue" }} >{row.price}</TableCell>
                                <TableCell align="center" sx={{ color: "aliceblue" }} >{row.quantity}</TableCell>
                                <TableCell align="center" sx={{ color: "aliceblue" }}>{row.value}</TableCell>
                                <TableCell align="center">

                                    <IconButton aria-label="delete" size="small" disabled={isUserMode}>
                                        <EditIcon fontSize="inherit" sx={{ color: isUserMode ? 'grey' : "green" }} />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small" disabled={isUserMode}>
                                        <RemoveRedEyeIcon fontSize="inherit" sx={{ color: isUserMode ? 'grey' : "pink" }} />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small" disabled={isUserMode}>
                                        <DeleteIcon fontSize="inherit" sx={{ color: isUserMode ? 'grey' : "red" }} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductDetailsComp