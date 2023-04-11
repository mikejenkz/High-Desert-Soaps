import { useState } from 'react'
import { useQuery } from 'react-query'
import { Outlet } from 'react-router-dom'
import Item from './Item'
import { Wrapper } from './Item.styles'
import Box from '@mui/material'
import { Grid3x3 } from '@mui/icons-material'
import Drawer from '@mui/material'
import Button from '@mui/material'
import Container from 'react-bootstrap/Container';
import { flexbox } from '@mui/system';


export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await(await fetch('https://fakestoreapi.com/products')).json()

const SoapProducts = () => {

   const [cartOpen, setCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error} = useQuery<CartItemType[]>(
    'prodcuts',
    getProducts
  );
  console.log(data)

  const getTotalItems = () => null

  const handleAddToCart = (clickedItem: CartItemType) => null

  const handleRemoveFromCart = () => null

  if (error) return <div>Something Went Wrong</div>

  return( 
<Wrapper style= {{backgroundColor: '#fff5f8'}}>

      <a>
      {data?.map(item => (
          <Item item={item} handleAddToCart = {handleAddToCart} />
      ))}
      </a>
</Wrapper>
  )
 };


export default SoapProducts