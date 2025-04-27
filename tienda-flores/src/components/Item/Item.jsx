import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <Card>
      <Card.Img variant="top" src={`https://via.placeholder.com/150?text=${item.name}`} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.price}€</Card.Text>
        <Button as={Link} to={`/item/${item.id}`} variant="primary">Ver Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
