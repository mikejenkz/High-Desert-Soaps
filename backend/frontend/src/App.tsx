import { useState } from 'react'
import { useQuery } from 'react-query'
import './App.css'
import { Outlet } from 'react-router-dom'
import { LinearProgress } from '@mui/material'
import Item from './modules/components/Item'
import { Wrapper } from './modules/components/Item.styles'
import Grid from '@mui/material'

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

const App = () => {
  const { data, isLoading, error} = useQuery<CartItemType[]>(
    'prodcuts',
    getProducts
  );
  console.log(data)

  const getTotalItems = () => null

  const handleAddToCart = (clickedItem: CartItemType) => null

  const handleRemoveFromCart = () => null

  if (isLoading) return <LinearProgress/>;
  if (error) return <div>Something Went Wrong</div>

  return(     
    <div>
  <Outlet/>
  </div>
  )
 };


export default App
