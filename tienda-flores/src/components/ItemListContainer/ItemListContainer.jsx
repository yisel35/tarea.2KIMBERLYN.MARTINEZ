import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { products } from '../../mocks/products';
import Item from '../Item/Item';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });

    fetchProducts.then((data) => {
      if (categoryId) {
        setItems(data.filter(product => product.category === categoryId));
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return (
    <Container className="py-4">
      <Row>
        {items.map(item => (
          <Col key={item.id} sm={6} md={4} lg={3} className="mb-4">
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemListContainer;
