import { Box, Button, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MyContext } from '../MyContext';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IProduct, ProductContextType } from '../types';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 560,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#282c34'
};

const btnStyle = {
    display: 'flex',
    height: '34px',
    marginTop: '42px',
    gap: '13px',
    justifyContent: 'flex-end'
}

function ProductDetailsComp() {

    const { products, isUserMode, updateProduct } = React.useContext(MyContext) as ProductContextType;

    const [selectedProduct, setSeletedProduct] = useState<IProduct>(products[0]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const handelDelete = (id: number) => {
        const updatedProductList = products.filter((item) => item.id != id);
        updateProduct(updatedProductList)
    }

    const handelDisabled = (id: number) => {
        const updatedProductList = products.map((item) => {
            if (item.id === id) item.isDisabled = true
            return item
        });
        updateProduct(updatedProductList)
    }

    const handleEdit = (item: IProduct) => {
        setSeletedProduct(item)
        setIsModalOpen(true)
    }

    const handleSave = () => {
        console.log(selectedProduct)
        setIsModalOpen(false)
        const updatedProductList = products.map((item) => {
            if (item.id === selectedProduct.id) item = {...selectedProduct}
            return item
        });
        updateProduct(updatedProductList)
    }

    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: 'aliceblue', backgroundColor: '#282c34' }}>
                        Edit Product
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, color: 'aliceblue' }}>
                        {selectedProduct?.name || ''}
                    </Typography>
                    <div style={{ height: '8em', display: 'flex' }}>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Category"
                                variant="filled"
                                onChange={(e) => setSeletedProduct({...selectedProduct, 'category': e?.target?.value || ''})}
                                defaultValue={selectedProduct?.category}
                                sx={{ input: { color: 'aliceblue', border: 'aliceblue', width: '214px', height: '20px' }, margin: '1em' }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Price"
                                variant="filled"
                                onChange={(e) => setSeletedProduct({...selectedProduct, 'price': e?.target?.value || ''})}
                                sx={{ input: { color: 'aliceblue', border: 'aliceblue', width: '214px', height: '20px' }, margin: '1em' }}
                                defaultValue={selectedProduct?.price}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Quantity"
                               
                                variant="filled"
                                onChange={(e) => setSeletedProduct({...selectedProduct, 'quantity': Number(e?.target?.value) })}
                                sx={{ input: { color: 'aliceblue', border: 'aliceblue', width: '214px', height: '20px' }, margin: '1em' }}
                                defaultValue={selectedProduct?.quantity}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Value"
                                variant="filled"
                                onChange={(e) => setSeletedProduct({...selectedProduct, 'value': e?.target?.value || ''})}
                                sx={{ input: { color: 'aliceblue', border: 'aliceblue', width: '214px', height: '20px' }, margin: '1em' }}
                                defaultValue={selectedProduct?.value}
                            />
                        </div>
                    </div>

                    <div style={btnStyle}>
                        <Button variant="outlined" color="error" size="small" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button variant="contained" color="secondary" onClick={handleSave}>Save</Button>

                    </div>
                </Box>
            </Modal>

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
                            {products?.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: row.isDisabled ? 'grey' : 'aliceblue' }}
                                >
                                    <TableCell component="th" scope="row" sx={{ color: row.isDisabled ? 'grey' : 'aliceblue' }}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: row.isDisabled ? 'grey' : 'aliceblue' }} >{row.category}</TableCell>
                                    <TableCell align="center" sx={{ color: row.isDisabled ? 'grey' : 'aliceblue' }} >{row.price}</TableCell>
                                    <TableCell align="center" sx={{ color: row.isDisabled ? 'grey' : 'aliceblue' }} >{row.quantity}</TableCell>
                                    <TableCell align="center" sx={{ color: row.isDisabled ? 'grey' : 'aliceblue' }}>{row.value}</TableCell>
                                    <TableCell align="center">

                                        <IconButton aria-label="edit" size="small" disabled={isUserMode || row.isDisabled} onClick={() => handleEdit(row)}>
                                            <EditIcon fontSize="inherit" sx={{ color: (isUserMode || row.isDisabled) ? 'grey' : "green" }} />
                                        </IconButton>
                                        <IconButton aria-label="view" size="small" disabled={isUserMode || row.isDisabled}>
                                            <RemoveRedEyeIcon fontSize="inherit" sx={{ color: (isUserMode || row.isDisabled) ? 'grey' : "pink" }} onClick={() => handelDisabled(row?.id)} />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="small" disabled={isUserMode || row.isDisabled} onClick={() => handelDelete(row?.id)}>
                                            <DeleteIcon fontSize="inherit" sx={{ color: (isUserMode || row.isDisabled) ? 'grey' : "red" }} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default ProductDetailsComp