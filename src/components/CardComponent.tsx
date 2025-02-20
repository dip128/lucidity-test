import React from 'react'
import { MyContext } from '../MyContext';
import { ProductContextType } from '../types';
import { Box, CardContent, Typography } from '@mui/material';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

function CardComponent() {

    const { totalProduct, totalStoreValue, outofStock, totalCategory } = React.useContext(MyContext) as ProductContextType;
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', width: '95%' }}>
            <Box sx={{ backgroundColor: 'rgb(27, 54, 34)', borderRadius: '5px', width: '270px' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <AddShoppingCartRoundedIcon fontSize='large' sx={{ color: 'aliceblue' }} />
                    </div>
                    <div>
                        <Typography variant="h1" gutterBottom sx={{ color: 'aliceblue', fontSize: 14 }}>
                            Total product
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ color: 'aliceblue', fontSize: 32 }}> {totalProduct}
                        </Typography>
                    </div>
                </CardContent>
            </Box>
            <Box sx={{ backgroundColor: 'rgb(27, 54, 34)', borderRadius: '5px', width: '270px' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <CurrencyExchangeRoundedIcon fontSize='large' sx={{ color: 'aliceblue' }} />
                    </div>
                    <div>
                        <Typography variant="h1" gutterBottom sx={{ color: 'aliceblue', fontSize: 14 }}>
                            Total store value
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ color: 'aliceblue', fontSize: 32 }}> {totalStoreValue}
                        </Typography>
                    </div>
                </CardContent>
            </Box>
            <Box sx={{ backgroundColor: 'rgb(27, 54, 34)', borderRadius: '5px', width: '270px' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <RemoveShoppingCartRoundedIcon fontSize='large' sx={{ color: 'aliceblue' }} />
                    </div>
                    <div>
                        <Typography variant="h4" gutterBottom sx={{ color: 'aliceblue', fontSize: 14 }}>
                            Out of Stock
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ color: 'aliceblue', fontSize: 32 }}> {outofStock}
                        </Typography>
                    </div>
                </CardContent>
            </Box>
            <Box sx={{ backgroundColor: 'rgb(27, 54, 34)', borderRadius: '5px', width: '270px' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <CategoryRoundedIcon fontSize='large' sx={{ color: 'aliceblue' }} />
                    </div>
                    <div>
                        <Typography variant="h4" gutterBottom sx={{ color: 'aliceblue', fontSize: 14 }}>
                            Number of category
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ color: 'aliceblue', fontSize: 32 }}> {totalCategory}
                        </Typography>
                    </div>
                </CardContent>
            </Box>

        </div>
    )
}

export default CardComponent