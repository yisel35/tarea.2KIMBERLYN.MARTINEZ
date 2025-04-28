import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ item }) {
    return (
        <Card className="h-100 shadow-sm" style={{ 
            backgroundColor: '#F8F9FA',
            border: '1px solid #F3E5F5'
        }}>
            <Card.Img
                variant="top"
                src={item.imagen}
                style={{ 
                    height: '300px', 
                    objectFit: 'cover',
                    borderBottom: '3px solid #E1BEE7'
                }}
                alt={item.name}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title style={{ 
                    color: "#9575CD", 
                    fontWeight: '600',
                    fontSize: '1.2rem'
                }}>
                    {item.name}
                </Card.Title>
                
                <Card.Text className="mt-auto h5" style={{ color: '#FF9E80' }}>
                    ${item.price} ARS
                </Card.Text>

                <Button
                    as={Link}
                    to={`/item/${item.id}`}
                    variant="outline-primary"
                    className="mt-2"
                    style={{
                        borderColor: '#81D4FA',
                        color: '#4FC3F7',
                        backgroundColor: '#E1F5FE'
                    }}
                >
                    🌸 Ver Detalle
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Item;