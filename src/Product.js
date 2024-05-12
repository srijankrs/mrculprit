import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {
  return (
    <div style={{padding:'2rem'}}>
      <Card style={{ width: '18rem'}}>
      <div style={{ height: '18rem'}}>
        <Card.Img variant="top" style={{height:'fill'}} src={require(""+props.imageLink)}  />
      </div>
      <Card.Body>
        <Card.Title>{props.label}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary" onClick={() => raiseInvoiceClicked(props.link)}>Buy now</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

function raiseInvoiceClicked(link){
  window.open(link, "_blank")
}

export default Product;
