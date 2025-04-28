import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainHeader() {
  const categorias = [
    { nombre: 'Rosas', ruta: 'rosas' },
    { nombre: 'Tulipanes', ruta: 'tulipanes' },
    { nombre: 'Margaritas', ruta: 'margaritas' },
    { nombre: 'Orquídeas', ruta: 'orquideas' }
  ];

  return (
    <Navbar bg="light" expand="lg" style={{ 
      backgroundColor: '#FFF0F5',
      borderBottom: '2px solid #E6E6FA'
    }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ 
          color: '#9370DB',
          fontFamily: 'cursive',
          fontSize: '1.5rem'
        }}>
          🌸 FlorPastel
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown 
              title="Categorías" 
              id="basic-nav-dropdown"
              menuVariant="light"
            >
              {categorias.map((categoria, index) => (
                <NavDropdown.Item 
                  key={index}
                  as={Link} 
                  to={`/category/${categoria.ruta}`}
                  style={{ color: '#87CEEB' }}
                >
                  {categoria.nombre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            
            <Nav.Link 
              as={Link} 
              to="/cart"
              style={{ color: '#FFB6C1' }}
            >
              🛒 Carrito
              <Badge bg="danger" pill className="ms-1"></Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;