import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products } from '../../mocks/products';
import { Container } from 'react-bootstrap';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === itemId));
      }, 500);
    });

    fetchItem.then((data) => setItem(data));
  }, [itemId]);

  if (!item) {
    return <h2>Cargando producto...</h2>;
  }

  return (
    <Container className="py-4">
      <h1>{item.name}</h1>
      <img
       src={item.imagen} alt={item.name} style={{ maxWidth: '600px', height: '600px' }} />
      <p>Precio: {item.price}ARG</p>
      <p>Categoría: {item.category}</p>
      <p>description: {item.description}</p>


    </Container>
  );
}

export default ItemDetailContainer;
