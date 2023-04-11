import { CartItemType } from "../../App";
import { Wrapper } from "./Item.styles";
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (

    <Card style=
    {{ width: '18rem',
    display:'inline-block'}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick Description
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
        {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item> */}
        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button size="small" onClick={() => handleAddToCart(item)}>Add to Cart</Button>
      </Card.Body>
    </Card>
);

export default Item;



{/* <Card sx={{ maxWidth: 200}}>
<CardMedia
  sx={{ height: 200 }}
  image={item.image}
  title={item.title}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {item.title}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {item.price}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small" onClick={() => handleAddToCart(item)}>Add to Cart</Button>
  <Button size="small">Learn More</Button>
</CardActions>
</Card> */}


{/* <Card style={{ width: '18rem',display:'inline-block'  }}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick Description
  </Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
<Card.Body>
  <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card> */}