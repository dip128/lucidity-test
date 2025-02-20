import React, { useEffect, useState } from 'react';
import './App.css';
import { getProductDetails } from './services/apiService';
import { Stack, styled, Switch, Typography } from '@mui/material';
import { MyContext } from './MyContext';
import { IProduct } from './types';
import { parseProduct } from './parsers/toStateParser';
import CardComponent from './components/CardComponent';
import ProductDetailsComp from './components/ProductDetailsComp';


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));

function App() {

  const [isUserMode, setUserMode] = useState<any>(false);
  const [productDetails, setProductDetails] = useState<Array<IProduct>>([{
    id: 1,
    name: 'test',
    category: 'test',
    quantity: 1,
    value: 1,
    price: 1,
    isDisabled: false,
  }])
  const [inventoryDetails, setInventoryDetails] = useState<any>({
    totalStoreValue: 0,
    totalProduct: 0,
    outofStock: 0,
    totalCategory: 0,
  });



  useEffect(() => {
    async function fetchDetails() {
      try {
        const result = await getProductDetails()
        if (result.length) {
          setProductDetails(parseProduct(result))
        }
      }
      catch (err) {
        console.log('Api failed', err);
      }
    }
    fetchDetails()
  }, [])



  const updateProduct = (id: number) => {

  }



  return (

    <MyContext.Provider value={{ products: productDetails, isUserMode: isUserMode, updateProduct, ...inventoryDetails }}>
      <div className="App">
        <div className='admin-toggle'>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography variant={'subtitle1'} color='aliceblue'>admin</Typography>
            <AntSwitch checked={isUserMode} inputProps={{ 'aria-label': 'ant design' }} onChange={() => setUserMode(!isUserMode)} />
            <Typography variant={'subtitle1'} color='aliceblue' >user</Typography>
          </Stack>
        </div>

        <h2 className='heading-1'> Inventory Management </h2>
        <CardComponent />

        <ProductDetailsComp />

      </div>
    </MyContext.Provider>
  );
}

export default App;
