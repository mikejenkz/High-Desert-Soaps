import withRoot from './modules/withRoot';
import { useContext } from 'react';
import * as React from 'react';
import { UserContext } from './App';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import ListGroupItem from 'react-bootstrap';
import { useEffect } from 'react';
import AppFooter from './modules/views/AppFooter';
import { PaymentForm } from 'react-square-web-payments-sdk';
import { CreditCard } from 'react-square-web-payments-sdk';
import { Link } from 'react-router-dom';


function ShoppingCart() {
  const {user}:any = useContext(UserContext)
  const {setUser}:any = useContext(UserContext)
  const {shop}:any = useContext(UserContext)
  const {setShop}:any = useContext(UserContext)
  const {count}:any = useContext(UserContext)
  const {setCount}:any = useContext(UserContext)

  function addToCart(props:any) {
    let doesntExist=true
    for(var x in shop) {
      if(shop[x].name == props.name) {
        shop[x].quanity+=1
        doesntExist = false
        shop[x].total += parseInt(shop[x].cost)
        setShop(shop);
        setCount(count+shop[x].cost);
        console.log(shop)
      }
    }
    if (doesntExist) { 
    shop.push({name:props.name, cost:props.cost,image:props.image,quanity:1,total:(props.cost)})
    setShop(shop)
    console.log(shop)
    }
  
  }

  function remove(props:any) {
    let doesntExist=true
    for(var x in shop) {
      if(shop[x].quanity != 1) {
        shop[x].quanity-=1
        doesntExist = false
        shop[x].total -= parseInt(shop[x].cost)
        setShop(shop);
        setCount(count-shop[x].cost);
        console.log(shop)
      }
      else {
        setShop(shop.filter((shop: any) => shop !== props))
        console.log(shop)
        setCount(count-props.cost)
      }
    }
  
  }


  //console.log(shop)

    return (
<div> 
            <div style={{display:'inline-block', justifyContent:'space-between', width:'100%', position:'relative'
          , left: '0px'}}>
{shop.map((i:any, item:any) => ( 
      <Card style={{ width: '18rem', float: 'left'}}>
      <Card.Img variant="top" src={i.image} style={{width:'10rem', height: '10rem'}}/>
      <Card.Body>
        <Card.Title>{i.name}</Card.Title>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${i.cost}</ListGroup.Item>
        <ListGroup.Item>Quantity: {i.quanity}</ListGroup.Item>
        <ListGroup.Item>Total: {i.total}</ListGroup.Item>

      </ListGroup>
      
      <button onClick ={ () => addToCart(i)} style={{width:"30%", color: 'white', backgroundColor:'green', cursor:'pointer'}}>Add To Cart</button>
      <button onClick ={ () => remove(i)} style={{width:"30%", color: 'white', backgroundColor:'red', cursor:'pointer'}}>Remove</button>

      </Card.Body>
    </Card>
            ))}
            </div>
            <br/>
        <a style={{fontSize: '30px'}}>Total Cost: ${count}.00 <br/> </a>
        <a style={{fontSize: '30px'}}>Click Below to Checkout <br/></a>
      <Link to ='../checkout/'> 
      <button style={{fontSize: '30px',padding:'12px 24px', backgroundColor:'blue',color:'white'}}> Check Out</button>
      </Link>
  {/* <div style={{width:'30%',alignContent:'center', position:'relative',marginLeft:'70%',right:'0%',top:'30%'}}> 
      <PaymentForm 
        applicationId="sandbox-sq0idb-WrOVw2MOfsoWTKxZajXkKQ"
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          console.log('token:', token);
          console.log('verifiedBuyer:', verifiedBuyer);
        }}
        locationId='LE6Z5ZY9S5EAM'
      >
        <CreditCard
  buttonProps={{
    css: {
      backgroundColor: "#771520",
      fontSize: "14px",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#530f16",
      },
    },
  }}
/>
      </PaymentForm>
      </div> */}

        <AppFooter/>
        </div>
      );
}

export default withRoot(ShoppingCart);