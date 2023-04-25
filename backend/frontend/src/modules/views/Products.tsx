import withRoot from '../withRoot';
import * as React from 'react';
import AppFooter from './AppFooter';
import App from '../../App';
import { useQuery } from 'react-query';
import { Grid, LinearProgress } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup, ListGroup } from 'react-bootstrap';
import { UserContext } from '../../App'
import { useContext } from 'react';



const getProducts = async (): Promise<[]> =>
  await(await fetch('https://raw.githubusercontent.com/mikejenkz/High-Desert-Soaps/main/products.json')).json(); 


function Products() {
  const {data, isLoading, error } = useQuery('prodcuts', getProducts
  );

  const {user}:any = useContext(UserContext)
  const {setUser}:any = useContext(UserContext)
  const {shop}:any = useContext(UserContext)
  const {setShop}:any = useContext(UserContext)
  const {count}:any = useContext(UserContext)
  const {setCount}:any = useContext(UserContext)

  if (isLoading) return <LinearProgress/>
  if (error) return <div>Please Refresh Page and try again.</div>

  function addToCart(props:any) {
    alert(`You have added ${props.name} to your cart.`)
    let doesntExist=true
    for(var x in shop) {
      if(shop[x].name == props.name) {
        shop[x].quanity+=1
        doesntExist = false
        shop[x].total += parseInt(shop[x].cost)
        setShop(shop)
        setCount(count+shop[x].cost);
        console.log(shop)
      }
    }
    if (doesntExist) { 
    shop.push({name:props.name, cost:props.cost,image:props.image,quanity:1,total:(props.cost)})
    setShop(shop)
    setCount(count+props.cost)
    console.log(shop)
    }
  
  }

 let allProducts = []
  for (var i in data) { 
    allProducts.push(data[i].fields)

  }



  if(user!= null){
    console.log(user.user)
  }



  if (allProducts != undefined) {
    return (
      <React.Fragment>
          <h1>All Current Prodcuts </h1>
<div style={{display:'inline-block', justifyContent:'space-between', width:'100%'}}>
{allProducts.map((i, item) => ( 
      <Card style={{ width: '18rem', float: 'left'}}>
      <Card.Img variant="top" src={i.image} style={{width:'10rem', height: '10rem'}}/>
      <Card.Body>
        <Card.Title>{i.name}</Card.Title>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Description: Organic Lavendar Soap</ListGroup.Item>
        <ListGroup.Item>Price: ${i.cost}</ListGroup.Item>

      </ListGroup>

      <button onClick ={ () => addToCart(i)} style={{width:"30%", color: 'white', backgroundColor:'green', cursor:'pointer'}}>Add To Cart</button>
      </Card.Body>
    </Card>
            ))}




        </div>
      <AppFooter/>
      </React.Fragment>
    );

  }

  else {
    return(
      <React.Fragment>
        Currently having issues please contact Jena Petry at email@email.com to place your order.
        <AppFooter/>
      </React.Fragment>
    )
  }

}

export default withRoot(Products);